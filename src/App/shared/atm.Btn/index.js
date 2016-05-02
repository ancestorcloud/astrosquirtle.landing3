import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

const Btn = ({ copy, style }) => (
  <button
    className={css(styles.button)}
    style={style}
  >{copy}</button>
)

Btn.propTypes = {
  copy: PropTypes.string,
  style: PropTypes.object
}

export default Btn

const styles = StyleSheet.create({
  button: {
    border: 'none',
    borderRadius: '4px',
    backgroundColor: colors.radicalRed,
    padding: '10px 20px',
    fontFamily: 'Bebas Neue',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'white'
  }
})
