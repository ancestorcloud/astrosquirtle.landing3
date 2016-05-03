import React from 'react'
import { renderToString } from 'react-dom/server'
import { StyleSheetServer } from 'aphrodite'
import Main from '../src/App/views/Landing'

export const prod = (bundle) => {
  const config = {
    title: 'AncestorCloud',
    favicon: '/assets/icons/favicon.ico',
    gaId: ''
  }

  const {html, css} = StyleSheetServer.renderStatic(() =>
    renderToString(<Main />)
  )

  return {
    'index.html': `
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${config.title}</title>
    <link rel="icon" href="${config.favicon}" type="image/x-icon" />
    <link href="/${bundle.css}" rel="stylesheet" type="text/css" />
    <style data-aphrodite>${css.content}</style>

    <script>!function(m,i,k,e,y){m.GoogleAnalyticsObject=k;m[k]||(m[k]=function(){
    (m[k].q=m[k].q||[]).push(arguments)});m[k].l=+new Date;e=i.createElement("script");
    y=i.scripts[0];e.src="//www.google-analytics.com/analytics.js";
    y.parentNode.insertBefore(e,y)}(window,document,"ga");

    ga("create", "${config.gaId}", "auto");</script>
  </head>
  <body>
    <div id="app">${html}</div>
    <script src="/${bundle.main}"></script>
  </body>
</html>
    `
  }
}

export const dev = ({main}) => ({
  'index.html': `
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Well this is cool</title>
        <script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,"script","//www.google-analytics.com/analytics.js","ga");

        ga("create", "", "auto");</script>
      </head>
      <body>
        <div id="app"></div>
        <script src="/${main}"></script>
      </body>
    </html>
  `
})

export default {
  dev,
  prod
}

module.exports = {
  dev,
  prod
}
