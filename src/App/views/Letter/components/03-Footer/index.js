import React from 'react'

import {Div, A} from 'glamorous'

const Footer = () =>
  <Div {...{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
    <Div {...{
      fontStyle: 'italic',
      fontSize: '0.7em',
      color: '#999',
    }}>{`2017 Ancestor Cloud Inc. All Rights Reserved`}</Div>
    <Div {...{
      width: '100%',
      maxWidth: '370px',

      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      {[
        {
          href: 'https://app.ancestorcloud.com/#/login',
          copy: 'Login',
          newTab: true,
        },
        {
          href: 'http://blog.ancestorcloud.com',
          copy: 'Blog',
          newTab: true,
        },
        {
          href: 'mailto:hello@ancestorcloud.com',
          copy: 'Email Us',
        },
        {
          href: 'tel:801-717-9054',
          copy: '801-717-9054',
        },
      ].map(({href, copy, newTab}) =>
        <A {...{
          href,
          target: newTab && '_blank',

          marginLeft: '10px',
          fontWeight: '700',
          letterSpacing: '0.1em',
          color: '#2AC0CB',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          ':hover': {
            textDecoration: 'underline',
          },
        }}>{copy}</A>
      )}
    </Div>
  </Div>

export default Footer
