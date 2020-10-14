export const getPantryItems = items => {
  return {
    type: "GET_PANTRY",
    items
  }
}

export const addToPantry = (item) => {
  return {
    type: "ADD_TO_PANTRY",
    item
  }
}

export const deleteItem = itemId => {
  debugger
  return {
    type: "DELETE_PANTRY_ITEM",
    itemId
  }
}

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

export const deletePantryItem = (itemId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/pantry/${itemId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error){
        alert(resp.error)
      } else {
        dispatch(deleteItem(itemId))
      }
    })
  }
}
