import React, {Component} from 'react';
import './styles/App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/authUser'
import Login from './components/Login'
import Logout from './components/Logout'
import NavBar from './components/NavBar'

class App extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
      const {loggedIn} = this.props
      return (
        <div className="App">
        {loggedIn ? <Logout /> : null}
          <NavBar/>
        </div>
      );
    }
  }

  const mapState = state => {
    return {
      loggedIn: !!state.user
    }
  }

export default connect(mapState, {getCurrentUser})(App);
