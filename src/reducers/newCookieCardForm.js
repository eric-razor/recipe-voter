const initialState = {
  recipe_name:"",
  recipe_ingredients:"",
  recipe_steps:"",
}

export default (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "UPDATE_NEW_COOKIE_FORM":
      return {
        ...state,
        [action.cookieCardData.name]: action.cookieCardData.value
      }
    case "CLEAR_NEW_COOKIE_FORM":
      return null
    default:
      return state
  }
}
