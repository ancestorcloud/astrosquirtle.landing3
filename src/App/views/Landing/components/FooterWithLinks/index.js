import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Logo from 'atm.Logo'
import LinkGroup from './components/LinkGroup'

const linkGroups = [
  {
    title: 'Social',
    links: [
      {
        copy: 'Facebook',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Twitter',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Instagram',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Google+',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Contact Us',
        href: 'https://wikipedia.org'
      }
    ]
  },
  {
    title: 'About',
    links: [
      {
        copy: 'Blog',
        href: 'https://wikipedia.org'
      }, {
        copy: 'FAQ',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Find Helpers',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Apply to Help',
        href: 'https://wikipedia.org'
      }, {
        copy: 'About',
        href: 'https://wikipedia.org'
      }
    ]
  },
  {
    title: 'Our Site',
    links: [
      {
        copy: 'Helpers',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Requests',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Search',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Register',
        href: 'https://wikipedia.org'
      }, {
        copy: 'Login',
        href: 'https://wikipedia.org'
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
