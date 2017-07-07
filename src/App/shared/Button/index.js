import React, { PropTypes } from 'react'

import {Button} from 'glamorous'
import { colors } from 'settings.style'

const Btn = ({ copy, size = 'normal' }) => (
  <Button {...{
    border: 'none',
    borderRadius: '100px',
    backgroundColor: '#3EA6FC',
    padding: '14px 24px',
    fontWeight: '700',
    fontSize: '12px',
    letterSpacing: '0.1em',
    color: 'white',
    cursor: 'pointer',
    outline: 'none',
  }}>{copy}</Button>
)

Btn.propTypes = {
  copy: PropTypes.string,
}

export default Btn
