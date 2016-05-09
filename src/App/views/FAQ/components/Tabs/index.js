import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

const Tabs = ({ tabNames, activeTab, onTabClick }) => (
  <div className={css(styles.wrapper)}>
    {
      tabNames.map((name, i) => (
        <div
          className={css(name === activeTab ? styles['tab-active'] : styles.tab)}
          onClick={() => onTabClick(name)}
          key={i}
        >{name}</div>
      ))
    }
  </div>
)

export default Tabs

const tabStyles = {
  marginBottom: '-1px',
  padding: '20px',
  fontSize: '1.2em',
  cursor: 'pointer',
  color: colors.ebonyClay
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  },

  tab: tabStyles,

  'tab-active': {
    ...tabStyles,
    borderBottom: `4px solid ${colors.radicalRed}`,
    color: colors.radicalRed
  }
})
