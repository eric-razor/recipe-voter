import React, {Component} from 'react';
import './styles/App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/authUser'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import CookieCardMaker from './components/CookieCardMaker'
// import CookieCardListContainer from './containers/CookieCardListContainer'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

class App extends Component {


  componentDidMount(){
    this.props.getCurrentUser()

  }
  render() {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Log In </Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/recipecards"> Cookie Cardz </Link>
                </li>
                <li>
                  <Link to="/new-card"> Create cookie card  </Link>
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
              <Route path="/new-card">
                <CookieCardMaker/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }

  const mapState = ({user}) => {
    return {
      user
    }
  }


export default connect(mapState, {getCurrentUser})(App);
