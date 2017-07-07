import React from 'react'

import glamorous, {Div, Img} from 'glamorous'

// const Nav = ({children}) =>
//   <Div {...{
//     width: '100%',
//     height: '65px',
//     padding: '0 32px',
//     background: 'white',
//     boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 2px -2px',
//   }}>
//     <Div {...{
//       width: '100%',
//       height: '65px',
//       maxWidth: '1040px',
//       padding: '0 20px',
//
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     }}>
//       {children}
//     </Div>
//   </Div>


const P = ({children, style, ...rest}) =>
  <p {...{
    style: {
      margin: '29px 0 0',
      // lineHeight: '2.0em',
      ...style,
    },
    rest,
  }}>{children}</p>

const A = ({children, ...rest}) =>
  <glamorous.A {...{
    ...rest,
    target: '_blank',

    textDecoration: 'none',
    color: '#2455C3',
    ':hover': {
      textDecoration: 'underline',
    },
  }}>{children}</glamorous.A>

const Letter = () =>
  <div>
    <P {...{
      style: {
        fontWeight: '900',
        fontSize: '1.2em',
        letterSpacing: '0.1em',
        color: '#3D5971',
      }
    }}>{`AncestorCloud acquires Genealogists.com`}</P>
    <P>
      {`This year we acquired `}
      <A {...{
        href: 'https://genealogists.com',
      }}>{`Genealogists.com`}</A>
      {`. Genealogists.com provides custom family research services from professional genealogists. This is a great match for our technology and we'll be shifting our focus to adapting the marketplace to power that website.`}</P>
    <P>
      {`We started AncestorCloud with the goal of connecting families around the world by making family history more accessible. We're excited to tell you that we'll be continuing that mission with Genealogists.com and our new product at `}
      <A {...{
        href: 'https://trace.com',
      }}>{`Trace.com`}</A>
      {`, but we're sad to announce that we'll be closing AncestorCloud.com.`}
    </P>
    <P>{`Since starting AncestorCloud in 2015, we've fulfilled countless requests with the help of over 13,000 users. We've built relationships that span the globe, we've helped people connect with loved ones, and we've made lifelong friendships in the process.`}</P>
    <P>{`AncestorCloud.com will no longer be taking requests or new registrations as of July 10th. We'll do our best to complete the existing requests. Existing users will be able to access their information until August 21st.`}</P>
    <P>
      {`If you're a researcher, you can fill out `}
      <A {...{
        href: `https://ancestorcloud.typeform.com/to/HAJQPD`,
      }}>{`this form`}</A>
      {` to apply to continue working with us at Genealogists.com. If you need help with family history, we'd be happy to have your business at Genealogists.com.  If you have any questions or concerns, please email us at `}
      <A {...{
        href: 'mailto:hello@ancestorcloud.com',
      }}>{`hello@ancestorcloud.com`}</A>
      {`.`}
    </P>
    <P>Sincerely,</P>
    <P>{`Your friends at AncestorCloud and Genealogists.com`}</P>
  </div>

export default Letter
