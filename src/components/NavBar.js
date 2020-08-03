import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import '../styles/NavBar.css'
import {connect} from 'react-redux'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import CookieCardMaker from './CookieCardMaker'

const NavBar = () => {
  return(
    <div className="NavBar">
      <Router>
        <div className="Nav-Routes">
          <nav>
            <ul className="Nav-Route-List">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Log In </Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/cookiecards"> Cookie Cardz </Link>
              </li>
              <li>
                <Link to="/cookiecards/new"> Create cookie card  </Link>
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
