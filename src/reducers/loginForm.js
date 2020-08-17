const initialState = {
  email:"",
  password:"password"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.loginFormObj
    case "CLEAR_LOGIN_FORM":
      return null
    default:
      return state
  }
}
