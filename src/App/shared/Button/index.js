import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

const Btn = ({ copy, size = 'normal' }) => (
  <button
    className={css(styles.button, styles[`button-${size}`])}
  >{copy}</button>
)

Btn.propTypes = {
  copy: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'big'])
}

export default Btn

const styles = StyleSheet.create({
  button: {
    border: 'none',
    borderRadius: '100px',
    backgroundColor: '#3EA6FC',
    padding: '14px 24px',
    fontWeight: '700',
    fontSize: '12px',
    letterSpacing: '0.1em',
    color: 'white',
    cursor: 'pointer',
    outline: 'none'
  },

  'button-big': {
    width: '100%',
    padding: '20px 30px'
  }
})
