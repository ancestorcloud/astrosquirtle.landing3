import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Avatar from 'atm.Avatar'

const Request = ({
  avatar,
  title,
  description,
  reward
}) => (
  <div className={css(styles.Request)}>
    <div>
      <Avatar
        src={avatar}
        size={80}
      />
    </div>
    <div className={css(styles.textNode)}>
      <div className={css(styles.title)}>{title}</div>
      <div className={css(styles.description)}>{description}</div>
      <div className={css(styles.reward)}>
        <span>Reward: </span>
        <span className={css(styles.rewardAmount)}>${reward}</span>
      </div>
    </div>
  </div>
)

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

const styles = StyleSheet.create({
  Request: {
    display: 'flex'
  },

  textNode: {
    marginLeft: '20px'
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
