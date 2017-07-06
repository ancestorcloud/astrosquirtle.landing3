import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from 'config.routes'

const dest = document.getElementById('app')

const Root = props =>
  <Router history={hashHistory}>
    {routes}
  </Router>

ReactDOM.render(<Root />, dest)
