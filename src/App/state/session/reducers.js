import { createReducer } from 'utils.redux'

import { UPDATE_SESSION } from './actions'

const initialState = {
  ref: ''
}

export const session = createReducer(initialState, {
  [UPDATE_SESSION]: (state, { payload }) => ({ ...state, ...payload })
})
