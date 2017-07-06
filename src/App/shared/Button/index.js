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
    borderRadius: '4px',
    backgroundColor: colors.radicalRed,
    padding: '13px 20px 10px',
    fontWeight: '400',
    fontFamily: 'Bebas Neue',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'white',
    cursor: 'pointer',
    outline: 'none'
  },

  'button-big': {
    width: '100%',
    padding: '20px 30px'
  }
})
