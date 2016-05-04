import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Tabs from './components/Tabs'

import faqData from './faqData'

import { colors } from 'settings.style'

const mapFaqDataToNode = ({ title, content }, i) => (
  <div className={css(styles.questionAndAnswer)} key={i}>
    <div className={css(styles.question)}>{title}</div>
    <div className={css(styles.answer)}>{content}</div>
  </div>
)

/**
 * 1. get active tab
 */
const FaqUI = ({ activeTab, onTabClick }) => {
  const activeFaqData = faqData
    .filter(({name}) => name === activeTab)[0] /* 1 */

  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.box)}>
        <h1 className={css(styles.header)}>Frequently Asked Questions</h1>
        <Tabs
          tabNames={faqData.map(({name}) => name)}
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
        <div>
          <div>{activeFaqData.data.map(mapFaqDataToNode)}</div>
        </div>
      </div>
    </div>
  )
}

const Faq = React.createClass({
  getInitialState () {
    return {
      activeTab: faqData[0].name
    }
  },

  render () {
    return (
      <FaqUI
        {...this.props}
        activeTab={this.state.activeTab}
        onTabClick={(name) => this.setState({ activeTab: name })}
      />
    )
  }
})

export default Faq

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
