import React, { PropTypes } from 'react'

import ImageAvatar from './components/ImageAvatar'
import InitialsAvatar from './components/InitialsAvatar'

const Avatar = (props) =>
  props.initials
  ? <InitialsAvatar {...props} />
  : <ImageAvatar {...props} />

Avatar.propTypes = {
  src: PropTypes.string,
  initials: PropTypes.array,
  size: PropTypes.number
}

export default Avatar
