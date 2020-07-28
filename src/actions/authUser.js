// sync
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type:"CLEAR_CURRENT_USER"
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

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("/logout", {
      method: "DELETE",
      credentials: "include"
    })
  }
}

export const signup = credentials => {
  return dispatch => {
    return fetch("/signup", {
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

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/users/get_current_user", {
      method:"GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then( user => {
      if(user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}
