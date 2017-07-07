import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from 'App'

import Letter from 'App/views/Letter'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Letter} />
    <Route path='*' component={Letter} />
  </Route>
)

export default routes
