import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Helper from './components/Helper'

import helpers from './helpers'

const FeaturedHelpers = () => (
  <div className={css(styles.FeaturedHelpers)}>
    <h2 className={css(styles.header)}>Featured Helpers</h2>
    <div className={css(styles.helpersFlex)}>
      {
        helpers
        .map((helperData, i) => (
          <div className={css(styles.helperWrapper)} key={i}>
            <Helper {...helperData} />
          </div>
        ))
      }
    </div>
  </div>
)

export default FeaturedHelpers

const styles = StyleSheet.create({
  FeaturedHelpers: {
    width: '100%',
    padding: '60px',
    backgroundColor: colors.ebonyClay,
    overflow: 'hidden'
  },

  header: {
    marginBottom: '50px',
    textAlign: 'center',
    color: 'white'
  },

  helpersFlex: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },

  helperWrapper: {
    margin: '20px'
  }
})
