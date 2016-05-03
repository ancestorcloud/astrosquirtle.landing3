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
    maxWidth: '800px'
  },

  box: {
    background: '#fff',
    padding: '50px'
  },

  header: {
    textAlign: 'center',
    fontFamily: 'Bebas Neue',
    color: colors.radicalRed
  },

  questionAndAnswer: {
    // ':not(:last-child)': {
    //   marginBottom: '40px'
    // }
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
