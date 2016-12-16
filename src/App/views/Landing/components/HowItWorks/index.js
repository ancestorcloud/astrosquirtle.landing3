import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Step from './components/Step'

const imagePath = '/assets/images/HowItWorks/'

const HIWSteps = [
  {
    title: 'Post a request for research help',
    description: 'Post a request with all of the information you have, what you need, and how much you\'re willing to pay.',
    image: {
      src: `${imagePath}oldPhotos.png`,
      width: 400
    }
  },
  {
    title: 'Choose a helper to work with',
    description: 'We have access to a network of expert researchers from all around the world. These researchers will submit proposals on your request. Once you accept a proposal, that helper will begin helping with your request.',
    image: {
      src: `${imagePath}map.png`,
      width: 500
    }
  },
  {
    title: 'Get results',
    description: `You'll receive a report with all of the research that was done. If the researcher does not do what was agreed upon, you don't pay a dime.`,
    image: {
      src: `${imagePath}laptop.png`,
      width: 500
    }
  }
]

/**
 * 1. For every even step this evaluates to true, otherwise false
 */
const HowItWorks = () => (
  <div className={css(styles.HowItWorks)}>
    <div className={css(styles.top)}>
      <div className={css(styles.header)}>How It Works</div>
      <div className={css(styles.headerExplainer)}>In three easy steps, connect with helpers from across the globe.</div>
    </div>
    <div style={{
      width: '100px',
      borderBottom: `2px solid ${colors.radicalRed}`
    }} />
    {
      HIWSteps
      .map((stepData, i) => {
        const even = i % 2 === 0 /* 1 */
        return (
          <div key={i} className={even ? css(styles.stepWrapper) : css(styles.stepWrapper, styles['stepWrapper-dark'])}>
            <div className={css(styles.stepWrapper2)}>
              <Step
                number={i + 1}
                imageFirst={!even}
                {...stepData}
              />
            </div>
          </div>
        )
      })
    }
  </div>
)

const styles = StyleSheet.create({
  HowItWorks: {
    width: '100%',
    background: '#fff',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  top: {
    padding: '60px',
    textAlign: 'center'
  },

  header: {
    fontFamily: 'Playfair Display',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontSize: '2.5em'
  },

  headerExplainer: {
    marginTop: '10px',
    fontStyle: 'italic',
    fontSize: '1.3em',
    color: colors.grey
  },

  /**
   * 1. prevents the wrapper's bg color from overlapping
   *    the step number
   */

  stepWrapper: {
    zIndex: '1', /* 1 */
    width: '100%',

    display: 'flex',
    justifyContent: 'center'
  },

  'stepWrapper-dark': {
    background: colors.base
  },

  stepWrapper2: {
    width: '100%',
    maxWidth: '1100px'
  }
})

export default HowItWorks
