import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Logo from 'atm.Logo'
import Btn from 'atm.Btn'
import { Link } from 'react-router'

import { links } from 'config.definitions'

const linksData = [
  {
    copy: 'FAQ',
    link: '/faq'
  },
  {
    copy: 'Blog',
    href: links.blog
  },
  {
    copy: 'Login',
    href: links.login
  },
  {
    copy: 'Get Started',
    href: links.registration,
    isButton: true
  }
]

const linkContent = (isButton, content) =>
  isButton
  ? (
    <Btn
      copy={content}
    />
  )
  : content

const mapLinkDataToLink = ({ copy, link, href, isButton }, i) =>
  link
  ? (
    <Link key={i} className={css(styles.link)} to={link}>{
      linkContent(isButton, copy)
    }</Link>
  )
  : (
    <a key={i} className={css(styles.link)} href={href}>
      {linkContent(isButton, copy)}
    </a>
  )

const Nav = () => (
  <div className={css(styles.Nav)}>
    <Link to='/'>
      <div className={css(styles['logo-big'])}>
        <Logo />
      </div>
      <img src='/assets/images/ac_cloud.png' className={css(styles['logo-small'])} />
    </Link>
    <ul className={css(styles.links)}>
      {
        linksData.map(mapLinkDataToLink)
      }
    </ul>
  </div>
)

export default Nav

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
      width: '240px',
      fontSize: '13px'
    }
  },

  link: {
    margin: 0,
    padding: 0,
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: colors.aluminium,

    ':not(:last-child)': {
      margin: 0,
      padding: 0
    }
  }
})
