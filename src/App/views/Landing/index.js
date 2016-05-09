import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import FeaturedHelpers from './components/FeaturedHelpers'
import Quote from './components/Quote'
import AsSeenIn from './components/AsSeenIn'
import CommunityInAction from './components/CommunityInAction'
import FeaturedRequests from './components/FeaturedRequests'
import CommunityGuidelines from './components/CommunityGuidelines'
import LetsGetStarted from './components/LetsGetStarted'
import FooterWithLinks from './components/FooterWithLinks'

const Landing = () => (
  <div className={css(styles.flex)}>
    <Hero />
    <HowItWorks />
    <FeaturedHelpers />
    <Quote />
    <AsSeenIn />
    <CommunityInAction />
    <FeaturedRequests />
    <CommunityGuidelines />
    <LetsGetStarted />
    <FooterWithLinks />
  </div>
)

export default Landing

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
})
