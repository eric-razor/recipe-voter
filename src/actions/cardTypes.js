// sync
export const getCategories = categories => {
  return {
    type: "GET_DISH_CATEGORIES",
    categories
  }
}

// async

export const getCardTypes = types => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/categories', {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(resp => {
      console.log(resp);
      // if (resp.error){
      //   alert(resp.error)
      // } else {
      //   dispatch(getCards(resp))
      // }
    })
  }
}
