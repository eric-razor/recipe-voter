import React from 'react'
import {
  Route,
  Switch,
  NavLink,
  withRouter
} from "react-router-dom";
import {connect} from 'react-redux'
import Explore from './Explore'
import Login from './Login'
import Signup from './Signup'
import CookieCardMaker from './CookieCardMaker'
import CookieCard from './CookieCard'
import CookieCardListContainer from '../containers/CookieCardListContainer'
import NavList from './NavList'


const NavBar = () => {
  return (
    <div className="NavBar">
      <NavList/>
      <Switch>

        <Route path="/signup" component={Signup}/>

        <Route path="/login" component={Login}/>

        <Route exact path="/cookiecards" component={CookieCardListContainer}/>

        <Route exact path="/cookiecards/new" component={CookieCardMaker}/>

        <Route exact path="/" component={Explore}/>

      </Switch>
    </div>
  )
}


export default withRouter(NavBar)
