// sync

export const updateCookieCardForm = (name, value) => {
  return {
    type: "UPDATE_NEW_COOKIE_FORM",
    formData: {name, value}
  }
}

// async
