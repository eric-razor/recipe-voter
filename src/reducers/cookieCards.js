const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case "GET_COOKIE_CARDZ":
      return action.cookiecardz
    case "CREATE_COOKIE_CARD":
      return state.concat(action.cookiecard)
    case "CLEAR_COOKIE_CARD":
      return []
    default:
      return state
  }
}
