import React from 'react'
import {
  Route,
  Switch,
  NavLink,
  withRouter
} from "react-router-dom";
import '../styles/NavBar.css'
import {connect} from 'react-redux'
import Explore from './Explore'
import Login from './Login'
import Signup from './Signup'
import CookieCardMaker from './CookieCardMaker'
import CookieCard from '../components/CookieCard'
import CookieCardListContainer from '../containers/CookieCardListContainer'


const NavBar = () => {
  return (
    <div className="NavBar">
        <div className="Nav-Routes">
          <nav>
            <ul className="Nav-Route-List">
              <li>
                <NavLink to="/">Explore</NavLink>
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
          // keep above
// switch should be in app.js
          <Switch>

            <Route path="/signup" component={Signup}/>

            <Route path="/login" component={Login}/>

            <Route path="/mycards" component={CookieCardListContainer}/>

            <Route path="/cookiecards/new" component={CookieCardMaker}/>

            <Route exact path="/" component={Explore}/>

          </Switch>
        </div>
    </div>
  )
}

const mapState = ({user}) =>{
  return({
    user
  })
}

export default withRouter(connect(mapState)(NavBar))
