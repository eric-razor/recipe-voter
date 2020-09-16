import {getCookieCards} from "./cookieCards"
import {resetSignupForm} from "./signupForm"
import {clearLoginForm} from "./loginForm"

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
        alert("Invalid email or password")
      } else {
        dispatch(setCurrentUser(user))
        dispatch(getCookieCards())
        dispatch(clearLoginForm())
        history.push('/cookiecards')
      }
    })
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

export const signup = (credentials,history) => {
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
        dispatch(resetSignupForm())
        history.push('/')
      }
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/currentuser", {
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
  }
}
