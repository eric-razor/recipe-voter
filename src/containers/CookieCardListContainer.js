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
    fetch('/cookiecardz')
    .then(resp => resp.json())
    .then(cardData => this.setState({
      cookiecardz: cardData.cookiecardz
    }))
  }

  render(){
    return(
      <CookieCardList cookiecardz={this.state.cookiecardz} />
    )
  }
}

export default CookieCardListContainer
