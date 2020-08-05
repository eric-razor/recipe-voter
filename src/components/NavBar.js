import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import '../styles/NavBar.css'
import {connect} from 'react-redux'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import CookieCardMaker from './CookieCardMaker'

const NavBar = () => {
  return (
    <div className="NavBar">
      <Router>
        <div className="Nav-Routes">
          <nav>
            <ul className="Nav-Route-List">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log In </NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/cookiecards"> Cookie Cardz </NavLink>
              </li>
              <li>
                <NavLink to="/cookiecards/new"> Create cookie card  </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/cookiecards/new">
              <CookieCardMaker/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

const mapState = ({user}) =>{
  return(
    user
  )
}

export default connect(mapState)(NavBar)
