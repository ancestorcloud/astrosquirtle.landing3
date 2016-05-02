import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Request from './components/Request'

const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt convallis purus, in rhoncus est blandit quis. Mauris congue ligula vitae nunc commodo, vitae rhoncus tellus pulvinar.'

const dummyRequest = {
  seeker: {
    name: 'John W. Smith',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/480px-Abraham_Lincoln_O-77_matte_collodion_print.jpg',
    description: 'Researcher in the United States',
    about: lipsum,
    flagSrc: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
  },
  helper: {
    name: 'Sarah Mags',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Marcus_Aurelius_Metropolitan_Museum.png/485px-Marcus_Aurelius_Metropolitan_Museum.png',
    description: 'Helper in Great Britain',
    about: lipsum,
    flagSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Union_flag_1606_%28Kings_Colors%29.svg'
  }
}

const requests = [
  dummyRequest, dummyRequest
]

const CommunityInAction = () => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.wrapper2)}>
      <h2 className={css(styles.header)}>Our community in action</h2>
      {
        requests
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
