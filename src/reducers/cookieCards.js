const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case "GET_COOKIE_CARDS":
      return action.cookieCards
    case "CREATE_COOKIE_CARD":
      return state.concat(action.cookiecard)
    case "UPDATE_COOKIE_CARD":
      return state.map(card  => card.id === action.card.id ? action.card : card)
    case "DELETE_COOKIE_CARD":
      return state.filter(card => card.id === action.cardId ? false : true)
    default:
      return state
  }
}
