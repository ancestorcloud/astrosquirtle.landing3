import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

const data = {
  text: 'I see this as a great way to do genealogy research quickly and efficiently when traveling to the locations yourself isn\'t an option.',
  source: 'Forbes'
}

const Quote = () => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.wrapper2)}>
      <blockquote className={css(styles.text)}>"{data.text}"</blockquote>
      <cite className={css(styles.source)}>&mdash; {data.source}</cite>
    </div>
  </div>
)

export default Quote

const styles = StyleSheet.create({
  wrapper: {
    background: colors.base,
    padding: '64px 32px',
    width: '100%',
    textAlign: 'center',

    display: 'flex',
    justifyContent: 'center'
  },

  wrapper2: {
    width: '100%',
    maxWidth: '1000px'
  },

  text: {
    marginBottom: '32px',
    fontSize: '2.0em',
    fontStyle: 'italic',
    color: colors.ebonyClay,

    '@media (max-width: 600px)': {
      fontSize: '1.4em'
    }
  },

  source: {
    margin: '32px',
    fontFamily: 'Bebas Neue',
    fontSize: '20px',
    letterSpacing: '2px',
    fontStyle: 'normal',
    color: colors.radicalRed
  }
})
