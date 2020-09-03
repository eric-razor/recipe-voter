const initialState = {
  recipe_name:"",
  recipe_ingredients:"",
  recipe_steps:"",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_COOKIE_FORM":
      return {
        ...state,
        [action.cookieCardData.name]: action.cookieCardData.value
      }
    case "CLEAR_NEW_COOKIE_FORM":
      return initialState

    case "EDIT_COOKIE_FORM":
      return action.cookieCardObj
    default:
      return state
  }
}
