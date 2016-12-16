import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from 'App'

import Landing from 'App/views/Landing'
import FAQ from 'App/views/FAQ'

import MainTemplate from 'App/templates/Main'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={MainTemplate(Landing)} />
    <Route path='/faq' component={MainTemplate(FAQ)} />
    <Route path='*' component={MainTemplate(Landing)} />
  </Route>
)

export default routes
