// sync
export const updatePantryInput = (name,value) => {
  const pantryInputData = {name,value}
  console.log(pantryInputData);
  return {
    type: "UPDATE_PANTRY",
    pantryInputData
  }
}

// async

// export const postPantryInput = (name,value) => {
//   // add dispatch
//   const pantryInputData = {name,value}
//   console.log(pantryInputData);
//   return {
//     type: "UPDATE_PANTRY",
//     pantryInputData
//   }
// }

export const postPantryInput = (item, history) => {
  return dispatch => {
    const pantryItem = {
      item: {
        item_name: pantryItem.item_name,
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
        alert(resp.error)
      } else {
        dispatch(postPantryInput(resp))
      }
    })
  }
}
