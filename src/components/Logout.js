import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../actions/authUser.js'
import {withRouter} from 'react-router-dom'
import '../styles/Logout.css'

const Logout = ({logout,history}) => {

  const exit = e => {
    e.preventDefault()
    logout()
    history.push('/')
  }

  return (
    <form onSubmit={exit}>
        <input className="logout-btn" type="submit" value="Log Out"/>
    </form>
  )
}

export default withRouter(connect(null, {logout})(Logout))
