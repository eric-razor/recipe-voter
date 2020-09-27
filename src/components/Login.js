import React from 'react'
import '../styles/Login.css'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/authUser'

const Login = ({loginFormData, updateLoginForm,login, history}) => {

  const handleInputChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]:value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(loginFormData, history)
  }

  return (
    <div className="Login">
      <form name="Login-form" onSubmit={handleSubmit}>

        <section className="input-section">
          <label htmlFor="email">Email </label>
              <input
                className="login-input"
                id="email"
                value={loginFormData.email}
                name="email"
                onChange={handleInputChange}
                type="text"
                required
              />
        </section>

        <section className="input-section">
          <label htmlFor="password">Password </label>
              <input
                className="login-input"
                id="password"
                type="password"
                value={loginFormData.password}
                name="password"
                required
                onChange={handleInputChange}
              />
        </section>

        <input className="login-btn" value="Log in" type="submit"/>
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapState, {updateLoginForm, login})(Login)
