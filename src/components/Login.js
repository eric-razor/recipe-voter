import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/authUser'

const Login = ({loginFormData, updateLoginForm,login}) => {

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
    login(loginFormData)
  }

  return (
    <div className="Login">
      <form name="Login-form" onSubmit={handleSubmit}>

        <section>
          <label htmlFor="email">Email</label>
            <div className="input-box">
              <input
                id="email"
                value={loginFormData.email}
                name="email"
                onChange={handleInputChange}
                type="text"
                required
              />
            </div>
        </section>

        <section>
          <label htmlFor="password"> Password</label>
            <div className="input-box">
              <input
                id="password"
                type="password"
                value={loginFormData.password}
                name="password"
                required
                onChange={handleInputChange}
              />
            </div>
        </section>

        <input value="Log in" type="submit"/>
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
