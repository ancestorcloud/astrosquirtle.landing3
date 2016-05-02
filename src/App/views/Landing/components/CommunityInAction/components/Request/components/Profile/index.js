import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

const Profile = ({ name, avatar, description, about, flagSrc, imageFirst = true }) => {
  const imageNode = (
    <div>
      <img
        src={avatar}
        className={css(styles.avatar)}
      />
    </div>
  )

  const textNode = (
    <div className={css(styles.textNode)}>
      <div className={css(styles.nameAndFlag)}>
        <div className={css(styles.name)}>{name}</div>
        <div>
          <img
            src={flagSrc}
            className={css(styles.flag)}
          />
        </div>
      </div>
      <div className={css(styles.description)}>{description}</div>
      <div className={css(styles.about)}>&quot;{about}&quot;</div>
    </div>
  )

  return (
    <div className={css(styles.Profile)}>
      {imageFirst ? imageNode : undefined}
      {textNode}
      {imageFirst ? undefined : imageNode}
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  about: PropTypes.string,
  flagSrc: PropTypes.string,

  imageFirst: PropTypes.bool
}

export default Profile

const styles = StyleSheet.create({
  Profile: {
    backgroundColor: 'white',

    display: 'flex'
  },

  avatar: {
    height: '200px',

    '@media (max-width: 500px)': {
      height: '140px'
    }
  },

  textNode: {
    padding: '24px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  nameAndFlag: {
    display: 'flex',
    alignItems: 'center'
  },

  name: {
    fontFamily: 'Bebas Neue',
    letterSpacing: '1px',
    fontSize: '1.5em',
    fontWeight: 'bold'
  },

  flag: {
    margin: '0 16px',
    width: '36px'
  },

  description: {
    color: colors.cadetBlue,
    fontStyle: 'italic'
  },

  about: {
    marginTop: '10px',
    fontSize: '0.9em'
  }
})
