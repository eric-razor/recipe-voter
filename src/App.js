import React, {Component} from 'react';
import './styles/App.css'
import Home from './components/Home'
class App extends Component {
  render(){
    return (
      <div className="App">
      <header className="App-header">app header</header>
      <Home />
      </div>
    );
  }
}

export default App;
