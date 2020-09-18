// sync
export const getPantryItems = pantryItems => {
  return {
    type: "GET_PANTRY",
    pantryItems
  }
}

// async
export const getPantry = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/pantry', {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error){
        alert(resp.error)
      } else {
        dispatch(getPantryItems(resp))
      }
    })
  }
}
