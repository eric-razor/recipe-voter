import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm'
import {signup} from '../actions/authUser.js'


const Signup = ({signupFormData, updateSignupForm, signup}) => {

  const handleInputChange = event => {
    const {name,value} = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]:value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    signup(signupFormData)
  }

  return (
    <div className="Signup">
      <form name="Signup-form" onSubmit={handleSubmit}>

      <section>
        <label htmlFor="username">Username</label>
          <div className="input-box">
            <input id="username" type="text" name="username" required value={signupFormData.username} onChange={handleInputChange} />
          </div>
      </section>

        <section>
          <label htmlFor="email">Email</label>
            <div className="input-box">
              <input id="email" type="text"  name="email" required value={signupFormData.email} onChange={handleInputChange} />
            </div>
        </section>

        <section>
          <label htmlFor="password"> Password</label>
            <div className="input-box">
              <input id="password"  type="password" name="password" required value={signupFormData.password} onChange={handleInputChange} />
            </div>
        </section>


        <input type="submit" value="Sign up" />
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapState, {updateSignupForm, signup})(Signup)








// <section>
// <label htmlFor="password"> Password</label>
// <div className="input-box">
// <input id="password-confirmation"  type="password-confirmation" name="password-confirmation" required value={signupFormData.password_confirmation} onChange={handleInputChange} />
// </div>
// </section>
