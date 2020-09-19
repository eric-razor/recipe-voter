export const updatePantryInput = (name,value) => {
  const pantryInputData = {name,value}
  return {
    type: "UPDATE_PANTRY",
    pantryInputData
  }
}
