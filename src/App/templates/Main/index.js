import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Nav from './components/Nav'

import { colors } from 'settings.style'

export default (Component) => React.createClass({
  render () {
    return (
      <div className={css(styles.flex)}>
        <Nav />
        <div className={css(styles.componentWrapper)}>
          <Component />
        </div>
      </div>
    )
  }
})

const styles = StyleSheet.create({
  flex: {
    position: 'relative',
    width: '100%',

    display: 'flex',
    flexDirection: 'column'
  },

  componentWrapper: {
    width: '100%',
    minHeight: 'calc(100% - 80px)',
    background: colors.base,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
