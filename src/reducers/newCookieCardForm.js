const initialState = {
  recipe_name:"",
  recipe_ingredients:"",
  recipe_steps:""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_COOKIE_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "CLEAR_NEW_COOKIE_FORM":
      return null
    default:
      return state
  }
}
