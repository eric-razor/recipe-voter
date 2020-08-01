import React from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h3> Cookie Cardz, please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log in</Link></h3>
    </div>
  )
}

export default Home
