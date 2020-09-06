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

export const editCookieCardFormData = (cookieCardObj) => {
  const card = {
    recipe_name: cookieCardObj.recipe_name,
    recipe_steps: cookieCardObj.recipe_steps,
    recipe_ingredients: cookieCardObj.recipe_ingredients
  }
  return {
    type:"EDIT_COOKIE_FORM",
    card
  }
}
