// sync

export const getCardz = cookiecardz => {
  return {
    type: "SET_COOKIE_CARDZ",
    cookiecardz
  }
}

export const clearCardz = () => {
  return {
    type: "CLEAR_COOKIECARDZ"
  }
}


// async

export const getCookieCardz = () => {
  return dispatch => {
    return fetch('/cookiecardz', {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type":"application/json"
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
