import {getCookieCards} from "./cookieCards"
import history from "../history"

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
export const login = (credentials, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method:"POST",
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
        dispatch(getCookieCards())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const signup = credentials => {
  return dispatch => {
    const userInfo = {
      user:  credentials
    }
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then( user => {
      if(user.error){
        console.log(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      method:"GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then( user => {
      if(user.error) {
        console.log(user)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}
