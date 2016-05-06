import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Btn from 'atm.Btn'

import { colors } from 'settings.style'

import { links } from 'config.definitions'

const Hero = () => (
  <div className={css(styles.Hero)}>
    <div className={css(styles.bifurcation)}>
      <div className={css(styles.bifurcationChild)}>
        <div className={css(styles.image, styles.image0)} />
        <div className={css(styles.textWrapper)}>
          <div className={css(styles.text)}>Pay researchers to help with your family discovery.</div>
          <div className={css(styles.buttonWrapper)}>
            <Btn
              copy='Post a request'
              size='big'
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className={css(styles.orWrapper)}>
        <div className={css(styles.or)}>or</div>
      </div>
      <div className={css(styles.bifurcationChild)}>
        <div className={css(styles.image, styles.image1)} />
        <div className={css(styles.textWrapper)}>
          <div className={css(styles.text)}>Help others with genealogy and be rewarded.</div>
          <div className={css(styles.buttonWrapper)}>
            <Btn
              copy='Fulfill a request'
              size='big'
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

function ctaOnClick () {
  if (window.ga) {
    window.ga('send', 'event', {
      eventCategory: 'Landing',
      eventAction: 'Find A Helper',
      eventLabel: 'Clicked'
    })
  }

  if (window.mixpanel) {
    window.mixpanel.track(
      'Landed',
      {source: 'main'}
    )
  }
}

const stretchStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%'
}

const orSize = 80

const styles = StyleSheet.create({
  Hero: {
    position: 'relative',
    background: '#000',
    width: '100%',
    height: '600px'
  },

  content: {
    ...stretchStyle,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '30px',
    color: 'white',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textMinor: {
    fontFamily: 'Bebas Neue',
    letterSpacing: '3px'
  },

  textMajor: {
    margin: '20px 0',
    fontFamily: 'Playfair Display',
    fontWeight: 'bold',
    fontSize: '2.4em',
    letterSpacing: '4px',

    '@media (max-width: 1000px)': {
      fontSize: '1.2em'
    }
  },

  // buttonWrapper: {
  //   marginTop: '80px'
  // },

  bifurcation: {
    ...stretchStyle,
    position: 'relative',
    display: 'flex'
  },

  bifurcationChild: {
    zIndex: '1',
    position: 'relative',
    width: '100%'
  },

  image: {
    ...stretchStyle,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    opacity: 0.8
  },

  textWrapper: {
    ...stretchStyle,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    width: '500px',
    textAlign: 'center',
    fontFamily: 'Bebas Neue',
    fontSize: '30px',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    color: '#fff',
    letterSpacing: '3px'
  },

  buttonWrapper: {
    marginTop: '30px'
  },

  image0: {
    backgroundImage: 'url(/assets/images/Hero/seeker.png)'
  },

  image1: {
    backgroundImage: 'url(/assets/images/Hero/helper.png)'
  },

  orWrapper: {
    zIndex: '2',
    margin: `0 ${orSize * -0.5}px`,
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  or: {
    borderRadius: '50%',
    background: colors.ebonyClay,
    width: '80px',
    height: '80px',
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#fff',
    textTransform: 'uppercase',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Hero
