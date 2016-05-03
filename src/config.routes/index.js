import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
import App from 'App'

import Landing from 'App/views/Landing'
import FAQ from 'App/views/FAQ'

import MainTemplate from 'App/templates/Main'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={MainTemplate(Landing)} />
      <Route path='/faq' component={MainTemplate(FAQ)} />
    </Route>
  </Router>
)

export default routes
