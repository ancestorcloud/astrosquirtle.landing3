import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Btn from 'atm.Btn'

const LetsGetStarted = () => (
  <div className={css(styles.LetsGetStarted)}>
    <Btn
      copy={'Let\'s get started'}
      style={{
        padding: '50px'
      }}
    />
  </div>
)

export default LetsGetStarted

const styles = StyleSheet.create({
  LetsGetStarted: {
    background: colors.base,
    width: '100%',
    height: '200px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
