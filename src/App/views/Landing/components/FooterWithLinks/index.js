import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Logo from 'atm.Logo'
import LinkGroup from './components/LinkGroup'

import { links } from 'config.definitions'

const linkGroups = [
  {
    title: 'Social',
    links: [
      {
        copy: 'Facebook',
        href: links.facebook
      }, {
        copy: 'Twitter',
        href: links.twitter
      }, {
        copy: 'Instagram',
        href: links.instagram
      }, {
        copy: 'Google+',
        href: links.googlePlus
      }
    ]
  },
  {
    title: 'About',
    links: [
      {
        copy: 'Blog',
        href: links.blog
      }, {
        copy: 'FAQ',
        href: links.faq
      }
    ]
  },
  {
    title: 'Community',
    links: [
      {
        copy: 'Helpers',
        href: links.community
      }, {
        copy: 'Requests',
        href: links.helpOthers
      }, {
        copy: 'Register',
        href: links.registration
      }, {
        copy: 'Login',
        href: links.login
      },
      {
        copy: 'Sign up to help',
        href: links.registration
      }
    ]
  }
]

const FooterWithLinks = () => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.flex)}>
      <div className={css(styles.logoWrapper)}>
        <Logo />
      </div>
      <div className={css(styles.linkGroupsWrapper)}>
        {
          linkGroups
          .map((linkGroupData, i) => (
            <div className={css(styles.linkGroupWrapper)} key={i}>
              <LinkGroup {...linkGroupData} />
            </div>
          ))
        }
      </div>
    </div>
  </div>
)

export default FooterWithLinks

const styles = StyleSheet.create({
  wrapper: {
    backgroundImage: 'url(/assets/images/FooterWithLinks/map.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: '1000px 300px',
    width: '100%',
    height: '300px',
    padding: '50px',

    display: 'flex',
    justifyContent: 'center'
  },

  flex: {
    width: '100%',
    maxWidth: '1000px',
    // padding: '64px',

    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 950px)': {
      padding: '10px',

      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },

    '@media (max-width: 500px)': {
      fontSize: '13px'
    }
  },

  logoWrapper: {
    marginBottom: '32px'
  },

  linkGroupsWrapper: {
    width: '100%',
    maxWidth: '400px',

    display: 'flex',
    justifyContent: 'space-between'
  },

  linkGroupWrapper: {
  }
})
