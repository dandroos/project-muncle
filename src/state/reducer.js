import { SET_MOBILE_MENU } from "./types"

const initialState = {
  mobileMenu: false,
}

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_MOBILE_MENU:
      newState.mobileMenu = payload
      break
    default:
      break
  }

  return newState
}
