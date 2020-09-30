const initialState = {
  item_name: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_PANTRY_INPUT":
      return {
        ...state,
        [action.pantryInputData.name]: action.pantryInputData.value
      }
    case "CLEAR_PANTRY_INPUT":
      return initialState
    default:
      return state
  }
}
