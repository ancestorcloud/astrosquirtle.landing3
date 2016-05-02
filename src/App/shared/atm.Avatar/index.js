import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

const Avatar = ({ src, size, style }) => (
  <div
    className={css(styles.Avatar)}
    style={{
      backgroundImage: `url(${src})`,
      width: `${size}px`,
      height: `${size}px`,
      ...style
    }}
  />
)

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf([ 128 ])
}

export default Avatar

const styles = StyleSheet.create({
  Avatar: {
    borderRadius: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }
})
