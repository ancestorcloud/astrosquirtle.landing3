import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { colors } from 'settings.style'
import { mediaAt } from 'utils.styling'

import Btn from 'atm.Btn'

import { links } from 'config.definitions'

const LetsGetStarted = () => (
  <div className={css(styles.LetsGetStarted)}>
    <div className={css(styles.buttonWrapper)}>
      <a href={links.registration} onClick={ctaOnClick}>
        <Btn
          copy={'Let\'s get started'}
          size='big'
        />
      </a>
    </div>
  </div>
)

export default LetsGetStarted

function ctaOnClick () {
  if (window.ga) {
    window.ga('send', 'event', {
      eventCategory: 'Landing',
      eventAction: 'Footer Get Started',
      eventLabel: 'Clicked'
    })
  }

  if (window.mixpanel) {
    window.mixpanel.track(
      'Landed',
      {source: 'footer'}
    )
  }
}

const styles = StyleSheet.create({
  LetsGetStarted: {
    background: colors.base,
    width: '100%',
    height: '200px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [mediaAt(600)]: {
      background: colors.ebonyClay
    }
  },

  buttonWrapper: {
    width: '300px',
    fontSize: '20px'
  }
})
