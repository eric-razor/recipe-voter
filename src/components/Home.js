import React from 'react'

import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h3>
        Welcome To Cookie Cards! please
        <br/>
         <Link to="/signup">Sign Up </Link> or
        <Link to="/login"> Log in</Link>
      </h3>
    </div>
  )
}

export default Home
