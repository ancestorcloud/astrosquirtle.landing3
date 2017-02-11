import React from 'react'
import { connect } from 'react-redux'

import { DELETE_NOTIFICATION } from './actions'
import { UPDATE_SESSION } from 'App/state/session/actions'

import errorGerunds from './errorGerunds.js'

const TYPE = {
  s: 'success',
  f: 'failure'
}

const emojis = {
  sad: '😞',
  happy: '😊',
  excited: '😄',
  disappointed: '😕'
}

const createNotification = ({ time = 5000, ...props }) => ({
  id: Math.random(),
  time,
  ...props
})

const reducerMap = {
  [DELETE_NOTIFICATION]: (state, { payload: { id } }) =>
    state.filter((notification) => notification.id !== id),

  [UPDATE_SESSION]: (state, { payload: { ref } }) =>
    ref === 'billiongravesPlus'
      ? state.concat(createNotification({
        type: TYPE.s,
        text: `Welcome BG+ Members! Please enjoy 15% off of your first request, discounted at checkout.`,
        time: 99999999
      }))
      : state
}

const initialState = [
  createNotification({
    type: TYPE.s,
    text:
      <div>
        {`Discover our new Origins Package we debuted at RootsTech. Check it out `}
        <a {...{
          href: 'https://trace.com',
          style: {
            color: 'inherit',
            textDecoration: 'underline'
          }
        }}>{`here!`}</a>
      </div>,
    time: 99999999
  })
]

/**
 * 1. The gerund map uses the default name for actions, e.g. ACTION.
 *    This allows us to match ACTION_FAILURE to the proper gerund.
 */
export const notifications = (state = initialState, action) => {
  const { type, error } = action

  const errorGerund = errorGerunds[type] || errorGerunds[type.replace('_FAILURE', '')]

  const ErrorJsx = ({ openModal }) => (
    <div>
      <span>{emojis.sad} Sorry. We encountered a problem while {errorGerund}. </span>
      <span>If this problem persists, <a onClick={() => openModal('feedback')}>contact us</a>.</span>
    </div>
  )

  const ErrorConnect = connect(
    () => ({}),
    {}
  )(ErrorJsx)

  return reducerMap[type]
    ? reducerMap[type](state, action)
    : error && errorGerund
      ? state.concat(createNotification({
        type: TYPE.f,
        text: <ErrorConnect />
      }))
      : state
}
