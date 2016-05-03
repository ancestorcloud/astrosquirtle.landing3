import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import faqData from './faqData'

const FAQ = () => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.box)}>
      {faqData.map(({ title, content }) => (
        <div className={css(styles.questionAndAnswer)}>
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

  questionAndAnswer: {
    ':not(:last-child)': {
      marginBottom: '40px'
    }
  },

  question: {
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '1.2em'
  },

  answer: {
    lineHeight: '1.4em'
  }
})
