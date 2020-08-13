// sync
export const updateCookieCardForm = (name,value) => {
  const cookieCardData = {name, value}
  return {
    type: "UPDATE_NEW_COOKIE_FORM",
    cookieCardData
  }
}

export const clearCookieCardForm = () => {
  return {
    type: "CLEAR_NEW_COOKIE_FORM"
  }
}

// async
