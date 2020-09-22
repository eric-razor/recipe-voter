const initialState = {
  item_name: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_PANTRY":
      return {
        ...state,
        [action.pantryInputData.name]: action.pantryInputData.value
      }
      case "POST_PANTRY_ITEM":
        return state
    default:
      return state
  }
}
