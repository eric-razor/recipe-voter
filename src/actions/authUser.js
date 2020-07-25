// sync
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

// async
export const login = credentials => {
  return dispatch => {
    return fetch("/login", {
      method:"POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then( user => {
      if(user.error){
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log())
  }
}
