import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, css } from 'aphrodite'

import Btn from 'atm.Btn'

import { links } from 'config.definitions'

const Hero = ({ refCode }) =>
  <div className={css(styles.Hero)}>
    <div className={css(styles.images)}>
      <div className={css(styles.image, styles.image0)} />
      <div className={css(styles.image, styles.image1)} />
    </div>
    <div className={css(styles.content)}>
      <div className={css(styles.textMinor)}>The easiest way to</div>
      <div className={css(styles.textMajor)}>discover your family</div>
      <div className={css(styles.buttonWrapper)}>
        <a href={`${links.registration}${refCode ? `?ref=${refCode}` : ''}`} onClick={ctaOnClick}>
          <Btn
            copy={'Let\'s get started'}
            size='big'
          />
        </a>
      </div>
    </div>
  </div>

const mapStateToProps = ({
  session: { ref: refCode }
}) => ({ refCode })

export default connect(mapStateToProps)(Hero)

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
    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
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

  buttonWrapper: {
    marginTop: '40px',
    width: '100%',
    maxWidth: '300px',
    fontSize: '20px'
  },

  images: {
    ...stretchStyle,
    position: 'absolute',
    opacity: '0.8',

    display: 'flex'
  },

  image: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },

  image0: {
    backgroundImage: 'url(/assets/images/Hero/seeker.png)'
  },

  image1: {
    backgroundImage: 'url(/assets/images/Hero/helper.png)'
  }
})
