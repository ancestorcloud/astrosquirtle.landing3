import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import faqData from './faqData'

import { colors } from 'settings.style'

const FAQ = () => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.box)}>
      <h1 className={css(styles.header)}>Frequently Asked Questions</h1>
      {faqData.map(({ title, content }, i) => (
        <div className={css(styles.questionAndAnswer)} key={i}>
          <div className={css(styles.question)}>{title}</div>
          <div className={css(styles.answer)}>{content}</div>
        </div>
      ))}
    </div>
  </div>
)

export default FAQ

const styles = StyleSheet.create({
  wrapper: {
    margin: '50px 0',
    width: '100%',
    maxWidth: '800px',

    '@media (max-width: 800px)': {
      margin: '5px 0 0'
    }
  },

  box: {
    background: '#fff',
    padding: '50px',

    '@media (max-width: 700px)': {
      padding: '20px'
    }
  },

  header: {
    textAlign: 'center',
    fontFamily: 'Bebas Neue',
    color: colors.radicalRed
  },

  questionAndAnswer: {
    marginTop: '40px'
  },

  question: {
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '1.3em',
    color: colors.ebonyClay
  },

  answer: {
    lineHeight: '1.4em'
  }
})
