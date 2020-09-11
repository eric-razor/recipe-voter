import React, {Component} from 'react';
import {
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import './styles/App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/authUser'
import {getCookieCards} from './actions/cookieCards'
import Logout from './components/Logout'
import NavBar from './components/NavBar'
import CookieCardListContainer from './containers/CookieCardListContainer'
import Login from './components/Login'
import Signup from './components/Signup'
import CookieCardForm from './components/CookieCardForm'
import CookieCard from './components/CookieCard'

class App extends Component {

// add check to see if user is logged in
// load cards in componentDidMount
// getcards action on mount
  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getCookieCards()
    // return {this.props.loggedIn ? this.props.getCurrentUser() && this.props.getCookieCards : null}
  }


  render() {
      const {loggedIn, cards, user} = this.props

      return (
        <div className="App">
        {loggedIn ? <Logout /> : null}
        {this.props.user ? <strong> Welcome {this.props.user.name}</strong> : ""}
          <NavBar/>
          <Switch>

            <Route path="/signup" component={Signup}/>

            <Route path="/login" component={Login}/>

            <Route exact path="/cookiecards" component={CookieCardListContainer}/>

            <Route exact path="/cookiecards/new" component={CookieCardForm}/>

            <Route exact path='/cookiecards/:id' render={(props) =>{
              console.log(cards);
              const card = cards.find(card => card.id === parseInt(props.match.params.id))

              return <div> { card && loggedIn ? <CookieCard {...props} card={card}/> : null } </div>

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
  }

  const mapState = state => {
    return {
      loggedIn: !!state.user,
      user: state.user,
      cards: state.cookieCards
    }
  }

export default connect(mapState, {getCurrentUser,getCookieCards})(App)
