import React, {Component} from 'react';
import './styles/App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/authUser'
import {getCookieCards} from './actions/cookieCards'
import Login from './components/Login'
import Logout from './components/Logout'
import NavList from './components/NavList'
import {
  withRouter
} from "react-router-dom";


class App extends Component {

// add check to see if user is logged in
// load cards in componentDidMount
// getcards action on mount
  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getCookieCards()
  }

  render() {
      const {loggedIn} = this.props

      return (
        <div className="App">
        {loggedIn ? <Logout /> : null}
        {this.props.user ? <strong> Welcome {this.props.user.name}</strong> : ""}
          <NavList cards={this.props.cards}/>
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
