export const updateLoginForm = (loginFormObj) => {
  return {
    type: "UPDATE_LOGIN_FORM",
    loginFormObj
  }
}

export const clearLoginForm = () => {
  return {
    type: "CLEAR_LOGIN_FORM"
  }
}
