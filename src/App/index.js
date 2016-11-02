import './style'
import React, { PropTypes } from 'react'

import { connect } from 'react-redux'
import { updateSession } from 'App/state/session/actions'

const App = React.createClass({
  propTypes: {
    children: PropTypes.node,
    updateSession: PropTypes.func
  },

  componentDidMount () {
    const ref = document.referrer
    const { updateSession } = this.props
    updateSession({ ref })
  },

  render () {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
})

App.propTypes = {
  children: PropTypes.node,
  updateSession: PropTypes.func
}

const boundActions = { updateSession }

export default connect(_ => _, boundActions)(App)
