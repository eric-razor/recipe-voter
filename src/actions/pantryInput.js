// sync
export const updatePantryInput = (name,value) => {
  const pantryInputData = {name,value}
  console.log(pantryInputData);
  return {
    type: "UPDATE_PANTRY_INPUT",
    pantryInputData
  }
}

export const addToPantry = (item) => {
  debugger
  return {
    type: "ADD_TO_PANTRY",
    item
  }
}

// async

export const postPantryInput = (item) => {
  return dispatch => {
    const pantryItem = {
      item_name: {
        item
      }
    }
    return fetch('http://localhost:3001/api/v1/pantry', {
      credentials:"include",
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(item)
    })
    .then(r => r.json())
    .then(resp => {
      if(resp.error){
        alert(resp.error)
      } else {
        dispatch(addToPantry(resp))
      }
    })
  }
}
