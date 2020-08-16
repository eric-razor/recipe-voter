import React, {Component} from 'react';
import './styles/App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/authUser'
import NavBar from './components/NavBar'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
      return (
        <div className="App">
          <NavBar/>
        </div>
      );
    }
  }

  const mapState = ({user}) => {
    return {
      user
    }
  }

export default connect(mapState, {getCurrentUser})(App);
