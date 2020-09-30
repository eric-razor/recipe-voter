import React, {Component} from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import './styles/App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/authUser'
import {getCookieCards} from './actions/cookieCards'
import {getPantry} from './actions/pantry'
import Logout from './components/Logout'
import NavBar from './components/NavBar'
import CookieCardListContainer from './containers/CookieCardListContainer'
import PantryContainer from './containers/PantryContainer'
import Login from './components/Login'
import Signup from './components/Signup'
import CookieCard from './components/CookieCard'
import CookieCardEditor from './components/CookieCardEditor'
import CookieCardCreator from './components/CookieCardCreator'
import Home from './components/Home'

class App extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getCookieCards()
    this.props.getPantry()
  }

  render() {
      const {loggedIn, cards, user} = this.props

      return (
        <div className="App">
          <div className="greeting">
            {user ? <strong> Welcome {user.name}</strong> : ""}
          </div>
          <NavBar />
          <Switch>

            <Route exact path="/signup" component={Signup}/>

            <Route exact path="/login" component={Login}/>

            <Route exact path="/pantry" component={PantryContainer} />

            <Route exact path="/cookiecards" component={CookieCardListContainer}/>

            <Route exact path="/cookiecards/new" component={CookieCardCreator}/>

            <Route exact path='/cookiecards/:id' render={(props) => {
              const card = cards.find(card => card.id === parseInt(props.match.params.id))
              return <div> { card ? <CookieCard {...props} card={card}/> : "No card here!"} </div>
            }}/>

            <Route exact path='/cookiecards/:id/edit' render={(props) =>{
                const card = cards.find(card => card.id === parseInt(props.match.params.id))
                return <div> <CookieCardEditor card={card} {...props}/></div>
            }}/>
          </Switch>

          <div className="logout-button-position">
            {loggedIn ? <Logout /> : <Home/>}
          </div>
        </div>
      );
    }
  }

  const mapState = state => {
    return {
      loggedIn: !!state.user,
      user: state.user,
      cards: state.cookieCards,
    }
  }

export default connect(mapState, {getCurrentUser,getCookieCards, getPantry})(App)
