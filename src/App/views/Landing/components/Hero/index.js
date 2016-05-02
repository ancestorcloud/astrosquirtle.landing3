import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Btn from 'atm.Btn'

const Hero = () => (
  <div className={css(styles.Hero)}>
    <div className={css(styles.images)}>
      <div className={css(styles.image, styles.image0)} />
      <div className={css(styles.image, styles.image1)} />
    </div>
    <div className={css(styles.content)}>
      <div className={css(styles.textMinor)}>Connecting family researchers with</div>
      <div className={css(styles.textMajor)}>genealogy experts</div>
      <div className={css(styles.textMinor)}>& willing helpers from around the world</div>
      <div className={css(styles.buttonWrapper)}>
        <Btn
          copy='Find A Helper'
          style={{
            padding: '20px 50px',
            fontSize: '20px'
          }}
        />
      </div>
    </div>
  </div>
)

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
    marginTop: '80px'
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

export default Hero
