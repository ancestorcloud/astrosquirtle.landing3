export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'

export const deleteNotification = id => ({
  type: DELETE_NOTIFICATION,
  payload: { id }
})
