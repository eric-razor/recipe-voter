import React, {Component} from 'react'
import CookieCardList from '../components/CookieCardList'

class CookieCardListContainer extends Component{

  constructor() {
    super()

    this.state = {
      cookiecardz: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/mycards')
    .then(resp => resp.json())
    .then(cardData => this.setState({
      cookiecardz: cardData.cookiecardz
    }))
  }

  render(){
    return(
      <div className="cookie-list">
      cookies:
        <CookieCardList cookiecardz={this.state.cookiecardz} />
      </div>
    )
  }
}

export default CookieCardListContainer
