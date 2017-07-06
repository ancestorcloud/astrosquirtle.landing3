import React from 'react'

import glamorous, {Div} from 'glamorous'

import TopPart from './components/01-Top'
import Letter from './components/02-Letter'
import Footer from './components/03-Footer'

export default () =>
  <div>
    <Div {...{
      background: '#242A39',
      padding: '64px 0',
      color: 'white',

      display: 'flex',
      justifyContent: 'center',
    }}>
      <Div {...{
        width: '100%',
        maxWidth: '800px',
      }}>
        <TopPart />
      </Div>
    </Div>
    <Div {...{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Div {...{
        width: '100%',
        maxWidth: '700px',
        padding: '100px 16px',
        // fontFamily: `medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif`,
        lineHeight: '1.58em',
        fontSize: '18px',
        fontWeight: '400',
        fontStyle: 'normal',
        '-moz-font-feature-settings': `"liga" on`,
        color: 'rgba(0,0,0,0.8)',
        textRendering: 'optimizelegibility',
        fontSmooth: 'grayscale',
      }}>
        <Letter />
      </Div>
    </Div>
    <Div {...{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Div {...{
        width: '100%',
        maxWidth: '700px',
        padding: '16px 16px 50px',
      }}>
        <Footer />
      </Div>
    </Div>
  </div>
