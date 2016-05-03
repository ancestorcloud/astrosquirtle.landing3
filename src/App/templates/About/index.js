import React, { PropTypes } from 'react'

import Nav from './components/Nav'
import Btn from 'atm.Btn'

const About = React.createClass({
  propTypes: {
    children: PropTypes.element,
    title: PropTypes.string
  },

  render: function () {
    const { title, children } = this.props

    return (
      <div styleName='Main'>
        <h1>{title}</h1>
        <div styleName='Box'>
          <div styleName='Box_top'>
            <div styleName='NavWrapper'>
              <Nav />
            </div>
            <span onClick={_ctaOnClick}>
              <Btn copy='Let&apos;s get started' />
            </span>
          </div>
          <div styleName='Content'>
            {children}
          </div>
        </div>
      </div>
    )
  }
})

export default About

// ///////////////////////////////////////

function _ctaOnClick () {
  window.ga('send', 'event', {
    eventCategory: 'Landing',
    eventAction: 'Lets Get Started',
    eventLabel: 'Clicked'
  })

  if (window.mixpanel) {
    window.mixpanel.track(
      'Landed',
      {source: 'faq'}
    )
  }

  window.location.href = 'http://app.ancestorcloud.com/#/registration'
}
