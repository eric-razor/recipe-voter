import {addToPantry} from './pantry'

export const updatePantryInput = (name,value) => {
  const pantryInputData = {name,value}
  return {
    type: "UPDATE_PANTRY_INPUT",
    pantryInputData
  }
}
export const clearPantryInput = () => {
  return {
    type: "CLEAR_PANTRY_INPUT"
  }
}

export const postPantryInput = (item, uid, history) => {
  return dispatch => {
    const pantryItem = {
      item: {
        item_name: item,
        user_id: uid
      }
    }
    return fetch('http://localhost:3001/api/v1/pantry', {
      credentials:"include",
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(pantryItem)
    })
    .then(r => r.json())
    .then(resp => {
      if(resp.error){
        alert("Item already exists")
      } else {
        dispatch(addToPantry(resp))
        dispatch(clearPantryInput())
        history.push("/pantry")
      }
    })
  }
}
