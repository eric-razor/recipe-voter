import {clearCookieCardForm} from './newCookieCardForm'

// sync
export const getCards = cookieCards => {
  return {
    type: "GET_COOKIE_CARDS",
    cookieCards
  }
}

export const addCard = cookieCard => {
  return {
    type: "CREATE_COOKIE_CARD",
    cookieCard
  }
}

export const editCard = cookieCard => {
  return {
    type: "EDIT_COOKIE_CARD",
    cookieCard
  }
}

export const updateCard = card => {
  return {
    type: "UPDATE_COOKIE_CARD",
    card
  }
}

export const clearCard = () => {
  return {
    type: "CLEAR_COOKIE_CARD"
  }
}

export const deleteCard = cardId => {
  return {
    type: "DELETE_COOKIE_CARD",
    cardId
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
      if(resp.error){
        alert(resp.error)
      } else {
        dispatch(addCard(resp))
        dispatch(clearCookieCardForm())
        history.push(`/cookiecards/${resp.id}`)
      }
    })
  }
}

export const editCookieCard = (cookieCardObj, history) => {
  debugger
    return dispatch => {
      const cookieCardData = {
        card: {
          recipe_name: cookieCardObj.recipe_name,
          recipe_steps: cookieCardObj.recipe_steps,
          recipe_ingredients: cookieCardObj.recipe_ingredients
        }
      }

      return fetch(`http://localhost:3001/api/v1/cookiecards/${cookieCardObj.cardId}`, {
        credentials:"include",
        method:"PATCH",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(cookieCardData)
      })
      .then(r => r.json())
      .then(resp => {
        if(resp.error){
          alert(resp.error)
        } else {
          dispatch(updateCard(resp))
          dispatch(clearCookieCardForm(resp))
          history.push(`/cookiecards/${resp.id}`)
        }
      })
    }
  }

  export const deleteCookieCard = (cardId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/cookiecards/${cardId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(deleteCard(cardId))
            history.push(`/cookiecards`)
          }
        })
      }
    }
