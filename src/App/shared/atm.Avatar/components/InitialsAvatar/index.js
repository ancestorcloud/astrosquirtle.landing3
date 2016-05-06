import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

const Avatar = ({ size, style, initials }) => (
  <div
    className={css(styles.Avatar)}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      fontSize: `${size * 0.5}px`,
      ...style
    }}
  >{
    initials.reduce((previous, initial) => `${previous}${initial}`)
  }</div>
)

Avatar.propTypes = {
  initials: PropTypes.array,
  size: PropTypes.number
}

export default Avatar

const styles = StyleSheet.create({
  Avatar: {
    borderRadius: '50%',
    backgroundColor: colors.aluminium,
    fontWeight: 'bold',
    color: '#fff',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
