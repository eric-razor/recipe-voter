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
    default:
      return state
  }
}
