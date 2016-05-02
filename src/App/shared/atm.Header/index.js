import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

const Header = ({ size = 'medium', copy }) => (
  <div className={css(styles[`header-${size}`])}>{copy}</div>
)

Header.propTypes = {
  level: PropTypes.oneOf([ 'medium', 'big' ]),
  copy: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

export default Header

const headerStyles = {
  fontFamily: 'Playfair Display',
  fontWeight: 'bold',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  fontSmoothing: 'antialiased'
}

const styles = StyleSheet.create({
  'header-big': {
    ...headerStyles,
    fontSize: '2.5em'
  },

  'header-medium': {
    ...headerStyles,
    fontSize: '2.0em'
  }
})
