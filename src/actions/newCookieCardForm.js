// sync

export const updateCookieCardForm = (name, value) => {
  return {
    type: "UPDATE_NEW_COOKIE_FORM",
    formData: {name, value}
  }
}

export const clearCookiCardForm = () => {
  return {
    type: "CLEAR_NEW_COOKIE_FORM"
  }
}

// async
