const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case "GET_PANTRY":
      return action.items
    case "ADD_TO_PANTRY":
      return state.concat(action.item)
    default:
      return state
  }
}
