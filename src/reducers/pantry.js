const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case "GET_PANTRY":
      return action.pantryItems
    default:
      return state
  }
}
