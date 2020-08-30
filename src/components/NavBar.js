import React from 'react'
import {
  Route,
  Switch,
  NavLink,
  withRouter
} from "react-router-dom";
import {connect} from 'react-redux'
import Login from './Login'
import Signup from './Signup'
import CookieCardMaker from './CookieCardMaker'
import CookieCard from './CookieCard'
import CookieCardListContainer from '../containers/CookieCardListContainer'
import NavList from './NavList'


const NavBar = (props) => {
  return (
    <div className="NavBar">
      <NavList/>
      <Switch>

        <Route path="/signup" component={Signup}/>

        <Route path="/login" component={Login}/>

        <Route exact path="/cookiecards" component={CookieCardListContainer}/>

        <Route exact path="/cookiecards/new" component={CookieCardMaker}/>

        <Route exact path="/cookiecards/:id" render={() => {
          

        }}/>

      </Switch>
    </div>
  )
}

const mapState = (props) =>{
  console.log(props);
  return{
    cards:props.cookieCards
  }
}


export default withRouter(connect()(NavBar))
