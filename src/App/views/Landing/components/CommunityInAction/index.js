import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Request from './components/Request'

import interactions from './interactions'

const CommunityInAction = () => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.wrapper2)}>
      <h2 className={css(styles.header)}>Our community in action</h2>
      {
        interactions
        .map((requestData, i) => (
          <Request
            key={i}
            {...requestData}
          />
        ))
      }
    </div>
  </div>
)

export default CommunityInAction

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.ebonyClay,
    width: '100%',
    padding: '60px 20px',

    display: 'flex',
    justifyContent: 'center'
  },

  wrapper2: {
    width: '100%',
    maxWidth: '1000px'
  },

  header: {
    marginBottom: '50px',
    textAlign: 'center',
    color: 'white'
  }
})
