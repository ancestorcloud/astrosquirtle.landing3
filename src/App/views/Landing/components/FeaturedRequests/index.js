import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Request from './components/Request'

import requests from './requests.js'

const FeaturedRequests = () => (
  <div className={css(styles.wrapper)}>
    <h2 className={css(styles.header)}>Featured Requests</h2>
    <div className={css(styles.flex)}>
      {
        requests
        .map((requestData, i) => (
          <div key={i} className={css(styles.requestWrapper)}>
            <Request
              {...requestData}
            />
          </div>
        ))
      }
    </div>
  </div>
)

export default FeaturedRequests

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: '60px',

    [`@media (max-width: 600px)`]: {
      padding: '60px 10px'
    }
  },

  header: {
    marginBottom: '40px',
    textAlign: 'center'
  },

  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

  requestWrapper: {
    margin: '20px 10px',
    width: '100%',
    maxWidth: '350px'
  }
})
