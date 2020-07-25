import React from 'react'
import '../styles/Login.css'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/authUser.js'


const Login = ({loginFormData, updateLoginForm,login}) => {

  const handleInputChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]:value
    }
    console.log(updateLoginForm);
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(loginFormData)
  }

  const togglePassword = e =>{
    e.preventDefault()
    const pw = document.getElementById("password")
    const pwBtn = document.getElementById("togglePasswordButton")
    if(pw.type === 'password'){
      pw.type = 'text';
      pwBtn.textContent = 'Hide password';
      pwBtn.setAttribute('aria-label','Hide password');
    } else {
      pw.type = 'password';
      pwBtn.textContent = 'Show password';
      pwBtn.setAttribute('aria-label','Show password as plain text. ' + 'Warning: this will display your password on the screen')
    }
  }
  return (
    <div className="Login">
      <form name="Login-form" onSubmit={handleSubmit}>
        <section>
        <label htmlFor="email">Email</label>
        <div className="input-box">
        <input id="email" type="text"  required value={loginFormData.email} onChange={handleInputChange} />
        </div>
        </section>

        <section>
        <label htmlFor="password"> Password</label>
        <div className="input-box">
        <input id="password"  type="password" required value={loginFormData.password} onChange={handleInputChange} />
        </div>
        </section>

        <button id="togglePasswordButton" aria-describedby="password-constraints" onClick={togglePassword} >Show password</button>
        <div id="password-constraints" type="text">password should be 8+ characters with a mix of letters, numbers and symbols</div>

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
