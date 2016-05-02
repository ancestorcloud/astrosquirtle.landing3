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

const compactWidth = 900
const compactLayout = `@media (max-width: ${compactWidth}px)`

const styles = StyleSheet.create({
  FeaturedHelpers: {
    width: '100%',
    padding: '60px',
    backgroundColor: colors.ebonyClay,
    overflow: 'hidden',

    [compactLayout]: {
      padding: '60px 10px'
    }
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
