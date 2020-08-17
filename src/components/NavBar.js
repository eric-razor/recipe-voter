import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import '../styles/NavBar.css'
import {connect} from 'react-redux'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import CookieCardMaker from './CookieCardMaker'
import CookieCard from '../components/CookieCard'
import CookieCardListContainer from '../containers/CookieCardListContainer'

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
                <NavLink to="/mycards"> My Cards </NavLink>
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

            <Route path="/mycards">
              <CookieCardListContainer/>
            </Route>

            <Route path="/cookiecards/new">
              <CookieCardMaker/>
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  )
}

const mapState = state =>{
  return({
    user: state.user
  })
}

export default connect(mapState)(NavBar)
