import './style'
import React, { PropTypes } from 'react'

import { connect } from 'react-redux'
import { updateSession } from 'App/state/session/actions'

const referrerToRefCode = {
  'http://trace.com.s3-website-us-west-2.amazonaws.com/page1.html': 'billiongraves',
  'http://trace.com.s3-website-us-west-2.amazonaws.com/page2.html': 'billiongravesPlus',
  'https://billiongraves.com/bgplus-discounts/': 'billiongravesPlus'
}

const App = React.createClass({
  propTypes: {
    children: PropTypes.node,
    updateSession: PropTypes.func
  },

  componentDidMount () {
    const ref = document.referrer
    if (referrerToRefCode[ref]) {
      const { updateSession } = this.props
      updateSession({
        ref: referrerToRefCode[ref]
      })
    }
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
