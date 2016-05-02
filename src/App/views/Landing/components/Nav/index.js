import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Logo from 'atm.Logo'
import Btn from 'atm.Btn'
import { Link } from 'react-router'

const links = [
  {
    copy: 'FAQ',
    link: '/'
  },
  {
    copy: 'Blog',
    link: '/'
  },
  {
    copy: 'Login',
    link: '/'
  },
  {
    copy: 'Get Started',
    link: '/',
    isButton: true
  }
]

const Nav = () => (
  <div className={css(styles.Nav)}>
    <div className={css(styles['logo-big'])}>
      <Logo />
    </div>
    <img src='/assets/images/ac_cloud.png' className={css(styles['logo-small'])} />
    <ul className={css(styles.links)}>
      {
        links.map(({ copy, link, isButton }, i) => (
          <Link key={i} className={css(styles.link)} to={link}>{
            isButton
            ? (
              <Btn
                copy={copy}
              />
            )
            : copy
          }</Link>
        ))
      }
    </ul>
  </div>
)

const styles = StyleSheet.create({
  Nav: {
    width: '100%',
    height: '80px',
    padding: '40px',
    fontFamily: 'Bebas Neue',
    letterSpacing: '2px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media (max-width: 600px)': {
      padding: '10px'
    }
  },

  'logo-big': {
    '@media (max-width: 550px)': {
      display: 'none'
    }
  },

  'logo-small': {
    display: 'none',
    width: '30px',
    '@media (max-width: 550px)': {
      display: 'block'
    }
  },

  links: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    width: '380px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media (max-width: 800px)': {
      width: '300px'
    },

    '@media (max-width: 550px)': {
      fontSize: '13px'
    }
  },

  link: {
    margin: 0,
    padding: 0,
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: colors.cadetBlue,

    ':not(:last-child)': {
      margin: 0,
      padding: 0
    }
  }
})

export default Nav
