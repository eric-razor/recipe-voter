const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case "GET_PANTRY":
      return action.pantryItems
    case "ADD_TO_PANTRY":
      return state.concat(action.item)
    default:
      return state
  }
}
