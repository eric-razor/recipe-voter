import React from 'react'
import {
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import {editCookieCardForm} from '../actions/newCookieCardForm'
import Login from './Login'
import Signup from './Signup'
import CookieCardForm from './CookieCardForm'
import CookieCard from './CookieCard'
import CookieCardListContainer from '../containers/CookieCardListContainer'
import NavBar from './NavBar'



const NavList = ({cards})  => {
  return (
      <div className="NavBar">
        <NavBar/>
        <Switch>

          <Route path="/signup" component={Signup}/>

          <Route path="/login" component={Login}/>

          <Route exact path="/cookiecards" component={CookieCardListContainer}/>

          <Route exact path="/cookiecards/new" component={CookieCardForm}/>

          <Route exact path='/cookiecards/:id' render={(props) =>{
            const card = cards.find(card => card.id === parseInt(props.match.params.id))
            return <div> <CookieCard {...props} recipe_name={card.recipe_name}
            recipe_ingredients={card.recipe_ingredients}
            recipe_steps={card.recipe_steps}/></div>

          }}/>

          <Route exact path='/cookiecards/:id/edit' render={(props) =>{
            const card = cards.find(card => card.id === parseInt(props.match.params.id))

            return <div> <CookieCard {...props}  recipe_name={card.recipe_name}
            recipe_ingredients={card.recipe_ingredients}
            recipe_steps={card.recipe_steps}/>/></div>

          }}/>

        </Switch>
      </div>
    );
  }

export default NavList
