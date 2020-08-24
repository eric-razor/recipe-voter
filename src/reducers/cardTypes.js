const initialState = ['Breakfast','Lunch','Dinner']

export default (state=initialState, action) => {
  switch (action.type) {
    case "GET_DISH_CATEGORIES":
      return action.categories
    default:
      return state
  }
}
