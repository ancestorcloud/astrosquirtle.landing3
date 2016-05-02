import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Avatar from 'atm.Avatar'
import StarRating from 'atm.StarRating'

const avatarSize = 140
const spaceFromTopOfBoxToTopOfAvatar = avatarSize / 2

const Helper = ({ avatar, name, location, rating }) => (
  <div className={css(styles.Helper)}>
    <Avatar
      src={avatar}
      size={avatarSize}
      style={{
        marginTop: `${-1 * spaceFromTopOfBoxToTopOfAvatar}px`,
        marginBottom: padding,
        border: '6px solid white'
      }}
    />
    <div className={css(styles.name)}>{name}</div>
    <div className={css(styles.description)}>Helper in {location}</div>
    <div className={css(styles.ratingWrapper)}>
      <StarRating rating={rating} />
    </div>
  </div>
)

Helper.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.number
}

export default Helper

const padding = '24px'

const styles = StyleSheet.create({
  Helper: {
    marginTop: `${spaceFromTopOfBoxToTopOfAvatar}px`,
    width: '240px',
    background: 'white',
    padding: `0 ${padding} ${padding}`,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  name: {
    fontFamily: 'Bebas Neue',
    fontSize: '1.5em',
    fontWeight: 'bold'
  },

  description: {

  },

  ratingWrapper: {
    marginTop: '18px'
  }
})
