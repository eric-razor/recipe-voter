// sync
export const updateSignupForm = (signupFormObj) => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    signupFormObj
  }
}

export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM"
  }
}
