import React from 'react'
import Router from 'utils.routing'
import CSSModules from 'react-css-modules'
import cn from 'classnames'

import Flexbox from 'obj.Flexbox'

const linksConfig = [
  {
    name: 'blog',
    copy: 'Blog',
    href: 'http://ancestorcloud.com/blog',
    eventAction: 'Blog'
  },
  {
    name: 'faq',
    copy: 'General FAQ',
    to: 'faq',
    eventAction: 'FAQ'
  },
  {
    name: 'request-faq',
    copy: 'Request FAQ',
    to: 'request-faq',
    eventAction: 'Request FAQ'
  },
  {
    name: 'howItWorks',
    copy: 'How it Works',
    to: 'howItWorks',
    eventAction: 'How It Works'
  }
]

const Nav = React.createClass({
  render () {
    return (
      <div>
        <div styleName='MobileNavWrapper'>
          {getMobileNav(linksConfig)}
        </div>
        <div styleName='FullNavWrapper'>
          {getFullNav(linksConfig)}
        </div>
      </div>
    )
  }
})

export default Nav

// //////////////////////////////////////////////

function getMobileNav (linksConfig) {
  const options = linksConfig.map((linkData) => {
    const { name } = linkData
    const option = <option value={name}>{linkData.copy}</option>
    return option
  })
  const currentRoutes = Router.getCurrent().routes
  const activeRouteName = currentRoutes[currentRoutes.length - 1].name
  const activeRouteIndex = linksConfig.map((link) => link.to || 'undefined').indexOf(activeRouteName)
  const noActiveRoutePlaceholder = activeRouteIndex === -1 ? (
    <option>Select page...</option>
  ) : null
  return (
    <Flexbox style={{height: '100%'}} align='center'>
      <select onChange={mobileNavSelectChange} value={activeRouteName}>
        {noActiveRoutePlaceholder}
        {options}
      </select>
    </Flexbox>
  )
}

function mobileNavSelectChange (e) {
  const value = e.target.value
  goToPage(value)
}

function goToPage (pageName) {
  const linkData = linksConfig.filter((pageData) => pageData.name === pageName)[0]
  const { href, to, eventAction } = linkData

  window.ga('send', 'event', {
    eventCategory: 'Landing',
    eventAction,
    eventLabel: 'Clicked'
  })

  if (href) {
    window.location.href = href
  } else {
    Router.transitionTo(to)
  }
}

function getFullNav (linksConfig) {
  return (
    <Flexbox styleName='Nav' justify='space-between' align='center' shrink='0'>
      {linksConfig.map((linkData) => getLink(linkData))}
    </Flexbox>
  )
}

function getLink (linkData) {
  const { name, copy, to } = linkData

  const currentRoutes = Router.getCurrent().routes
  const activeRouteName = currentRoutes[currentRoutes.length - 1].name

  // const classes = cn({
  //   [style.ActiveLink]: activeRouteName && activeRouteName === to
  // })

  const classes = ''

  return (
    <span
      styleName='Link'
      className={classes}
      onClick={goToPage.bind(null, name)}
    >
      <span styleName='Link_copy'>{copy}</span>
    </span>
  )
}
