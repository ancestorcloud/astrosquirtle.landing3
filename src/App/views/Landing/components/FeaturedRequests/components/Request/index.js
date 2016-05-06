import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Avatar from 'atm.Avatar'

const Request = ({
  user: {
    avatar,
    name
  },
  title,
  description,
  reward
}) => {
  const avatarNode =
    avatar
    ? (
      <Avatar
        src={avatar}
        size={50}
      />
    )
    : (
      <Avatar
        initials={name.split(' ').map((n) => n.charAt(0))}
        size={50}
      />
    )
  return (
    <div className={css(styles.Request)}>
      <div className={css(styles.avatarWrapper)}>
        {avatarNode}
      </div>
      <div className={css(styles.textNode)}>
        <div className={css(styles.topFlex)}>
          <div className={css(styles.inlineAvatarWrapper)}>
            {avatarNode}
          </div>
          <div className={css(styles.title)}>{title}</div>
        </div>
        <div className={css(styles.description)}>{description}</div>
        <div className={css(styles.reward)}>
          <span>Reward: </span>
          <span className={css(styles.rewardAmount)}>${reward}</span>
        </div>
      </div>
    </div>
  )
}

Request.propTypes = {
  owner: PropTypes.shape({
    avatar: PropTypes.shape({
      normal: PropTypes.string
    })
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  reward: PropTypes.number
}

export default Request

const compactWidth = 1000
const compactLayout = `@media (max-width: ${compactWidth}px)`

const styles = StyleSheet.create({
  Request: {
    display: 'flex'
  },

  avatarWrapper: {
    [compactLayout]: {
      display: 'none'
    }
  },

  textNode: {
    marginLeft: '20px'
  },

  topFlex: {
    display: 'flex',
    alignItems: 'center',

    [compactLayout]: {
      marginBottom: '10px'
    }
  },

  inlineAvatarWrapper: {
    display: 'none',

    [compactLayout]: {
      display: 'block',
      marginRight: '10px'
    }
  },

  title: {
    fontWeight: 'bold'
  },

  reward: {
    marginTop: '20px',
    fontWeight: 'bold'
  },

  rewardAmount: {
    color: colors.malachite
  }
})
