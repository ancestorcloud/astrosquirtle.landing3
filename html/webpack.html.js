var fs = require('fs')
var path = require('path')
var config = require('../webpack.config.js')

config.entry = path.resolve(__dirname, 'index.js')
config.target = 'node'
config.node = {
  __filename: true,
  __dirname: true
}
config.output.filename = 'html.bundle.js'
config.output.path = path.resolve('html')
config.externals = fs.readdirSync(path.resolve('node_modules')).concat([
  'react-dom/server', 'react/addons'
]).reduce(function (ext, mod) {
  ext[mod] = 'commonjs ' + mod
  return ext
}, {})
config.module = {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
  ]
}
config.plugins = []
config.output.libraryTarget = 'commonjs2'

module.exports = config
