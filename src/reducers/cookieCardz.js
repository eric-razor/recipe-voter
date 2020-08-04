const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case "SET_COOKIE_CARDZ":
      return action.cookiecardz
    case "CLEAR_COOKIE_CARDZ":
      return []
    default:
      return state
  }
}
