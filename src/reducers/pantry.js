const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case "GET_PANTRY":
      return action.items
    case "ADD_TO_PANTRY":
      return state.concat(action.item)
    case "DELETE_PANTRY_ITEM":
      return state.filter(item => item.itemId === action.itemId ? false : true)
    default:
      return state
  }
}
