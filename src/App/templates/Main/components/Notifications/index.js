import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {css} from 'aphrodite'
import styles from './styles'

import { deleteNotification } from './state/actions'

const deferExecution = (action, param) => () => { action(param) }

const getNotificationNode = ({ id, text, type, time = 5000 }, deleteNotification) => {
  const action = deferExecution(deleteNotification, id)

  window.setTimeout(action, time)

  return (
    <div key={id} className={css(styles[`notification-${type}`])}>
      <div className={css(styles.offset)} />
      <div className={css(styles.body)}>
        <div className={css(styles.icon)} />
        <div className={css(styles.text)}>{text}</div>
      </div>
      <div className={css(styles.offset)} />
      <div
        className={css(styles.exit)}
        onClick={action}
      />
    </div>
  )
}

const Notifications = ({notifications, deleteNotification}) => (
  <div className={css(styles.wrapper)}>
    {notifications.map(notification => getNotificationNode(notification, deleteNotification))}
  </div>
)

Notifications.propTypes = {
  notifications: PropTypes.array,
  deleteNotification: PropTypes.func
}

export default connect(
  ({ notifications }) => ({ notifications }),
  { deleteNotification }
)(Notifications)
