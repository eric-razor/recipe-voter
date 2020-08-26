import {clearCookieCardForm} from './newCookieCardForm'
// sync
export const getCards = cookiecards => {
  return {
    type: "GET_COOKIE_CARDS",
    cookiecards
  }
}

export const addCard = cookiecard => {
  return {
    type: "CREATE_COOKIE_CARD",
    cookiecard
  }
}

export const clearCard = () => {
  return {
    type: "CLEAR_COOKIE_CARD"
  }
}

// async
export const getCookieCards = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/cookiecards', {
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
        dispatch(getCards(resp))
      }
    })
    .catch(console.log)
  }
}

export const postCookieCard = (cookieCardObj, history) => {
  return dispatch => {
    const cookieCardData = {
      card: {
        recipe_name: cookieCardObj.recipe_name,
        recipe_steps: cookieCardObj.recipe_steps,
        recipe_ingredients: cookieCardObj.recipe_ingredients,
        user_id: cookieCardObj.uid
      }
    }

    return fetch('http://localhost:3001/api/v1/cookiecards', {
      credentials:"include",
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(cookieCardData)
    })
    .then(r => r.json())
    .then(resp => {
      console.log(resp);
      if(resp.error){
        alert(resp.error)
      } else {
        dispatch(addCard(resp))
        dispatch(clearCookieCardForm())
        history.push(`/cookiecards`)
      }
    })
  }
}
