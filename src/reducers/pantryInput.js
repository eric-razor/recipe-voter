const initialState = " "

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_PANTRY":
      return state.concat(action.pantryInput)
    default:
      return state

  }
}
