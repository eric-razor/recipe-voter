import React from 'react'
import {
  Route,
  Switch,
  NavLink,
  withRouter
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

          <Route path="/signup" render={({history}) => <Signup history={history}/>}/>

          <Route path="/login" component={Login}/>

          <Route path="/mycards" component={CookieCardListContainer}/>

          <Route path="/cookiecards/new" component={CookieCardMaker}/>

          <Route exact path="/" component={Home}/>

          </Switch>
        </div>
    </div>
  )
}

const mapState = state =>{
  return({
    user: state.user
  })
}

export default withRouter(connect(mapState)(NavBar))
