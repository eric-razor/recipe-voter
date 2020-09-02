import React, {Component} from 'react'
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


const NavBar = ({cards})  => {
  {
    return (
      <div className="NavBar">
        <NavList/>
        <Switch>

          <Route path="/signup" component={Signup}/>

          <Route path="/login" component={Login}/>

          <Route exact path="/cookiecards" component={CookieCardListContainer}/>
// pass redux props to cookiecard

          <Route exact path="/cookiecards/new" component={CookieCardMaker}/>

          <Route exact path='/cookiecards/:id' render={(props) =>{
            console.log("child cards:",cards);
            console.log("props: ",props);
            const card = cards.find(card => card.id === parseInt(props.match.params.id))
            console.log(card);
            return <div> <CookieCard {...props} recipe_name={card.recipe_name}
            recipe_ingredients={card.recipe_ingredients}
            recipe_steps={card.recipe_steps}/></div>

          }}/>

          <Route exact path='/cookiecards/:id/edit' render={(props) =>{

            return <div> <CookieCard {...props}/></div>

          }}/>

        </Switch>
      </div>
    );
  }
}
// nav list
export default NavBar
