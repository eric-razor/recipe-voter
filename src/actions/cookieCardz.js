// sync

export const getCardz = cookiecardz => {
  return {
    type: "GET_COOKIE_CARDZ",
    cookiecardz
  }
}

export const clearCard = () => {
  return {
    type: "CLEAR_COOKIE_CARD"
  }
}

export const addCard = cookiecard => {
  return {
    type: "CREATE_COOKIE_CARD",
    cookiecard
  }
}


// async

export const getCookieCardz = () => {
  return dispatch => {
    return fetch('/cookiecardz', {
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
        console.log(resp.data);
        dispatch(getCardz(resp.data))
      }
    })
    .catch(console.log)
  }
}

export const postCookieCard = cookieCardObj => {
  return dispatch => {
    return fetch('/cookiecardz', {
      credentials:"include",
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(cookieCardObj)
    })
    .then(r => r.json())
    .then(console.log)
    .catch(console.log)
  }
}
