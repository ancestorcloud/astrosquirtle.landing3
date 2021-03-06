import React from 'react'
import Media from 'react-media'

import glamorous, {Div, Img, A} from 'glamorous'

import Button from '../../../../shared/Button'

const adjacentBoxesStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const Space = () =>
  <Div height='40px' />

const Copy = glamorous.div({
  textAlign: 'center',
  fontWeight: '100',
  letterSpacing: '0.04em',
  fontSize: '1.3em',
})

const Left = ({width100}) =>
  <Div {...{
    ...adjacentBoxesStyles,
    width: width100 ? '100%' : '50%',
  }}>
    <Img {...{
      src: '/assets/ac.com-svg.svg',
      height: '80px',
    }} />
    <Space />
    <Copy>{`AncestorCloud has acquired Genealogists.com!`}</Copy>
    <Space />
    <Div {...{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    }}>
      {[
        {
          copy: 'Read the official press release',
          href: '/AncestorCloud-Rebrands-Acquires-Genealogists.com-July-2017.pdf',
        },
        {
          copy: 'Learn more about our rebrand',
          href: 'http://blog.ancestorcloud.com/2017/07/07/rebranding-to-trace/',
        },
        {
          copy: 'Log in to AncestorCloud',
          href: 'https://app.ancestorcloud.com/#/login',
        },
      ].map(({copy, href}) =>
        <Div {...{
          marginBottom: '10px',
        }}>
          <A {...{
            href,
            target: '_blank',

            height: '22px',
            paddingRight: '30px',
            backgroundImage: `url('/assets/go-white.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '22px 22px',
            backgroundPosition: 'right center',
            // fontFamily: 'Bebas Neue',
            fontSize: '0.9em',
            fontWeight: '500',
            letterSpacing: '0.1em',
            color: 'white',
            textDecoration: 'none',
            ':hover': {
              // textDecoration: 'underline',
              backgroundImage: `url('/assets/go-gold.svg')`,
              color: '#18C0CC',
            },

            display: 'flex',
            alignItems: 'center',
          }}>
            <Div {...{
              paddingTop: '4px',
            }}>{copy}</Div>
          </A>
        </Div>
      )}
    </Div>
  </Div>

const Right = ({width100}) =>
  <Div {...{
    ...adjacentBoxesStyles,
    width: width100 ? '100%' : '50%',
  }}>
    <Img {...{
      src: '/assets/g.com-svg.svg',
      height: '80px',
    }} />
    <Space />
    <Copy>{`Continue giving or receiving research help at Genealogists.com`}</Copy>
    <Space />
    <a href='https://genealogists.com' target='_blank'>
      <Button {...{
        copy: <Div width='150px'>{`Get Research Help`}</Div>,
      }} />
    </a>
    <Div height='16px' />
    <a href='https://ancestorcloud.typeform.com/to/HAJQPD' target='_blank'>
      <Button {...{
        copy: <Div width='150px'>{`Become a Researcher`}</Div>,
      }} />
    </a>
  </Div>

const TopPart = () =>
  <Div {...{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <Div {...{
      // fontFamily: 'Playfair Display',
      fontWeight: '900',
      letterSpacing: '0.15em',
      fontSize: '1.4em',
    }}>{`Big Announcement 🎉`}</Div>
    <Space />
    <Media query="(min-width: 700px)">
      {media => media
        ? (
          <Div {...{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Left />
            <Div width='40px' />
            <Div {...{
              height: '300px',
              borderLeft: '1px solid white',
            }} />
            <Div width='40px' />
            <Right />
          </Div>
        )
        : (
          <Div {...{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Left width100 />
            <Div height='40px' />
            <Div {...{
              width: '100%',
              borderBottom: '1px solid white',
            }} />
            <Div height='40px' />
            <Right width100 />
          </Div>
        )
      }
    </Media>
  </Div>

export default TopPart
