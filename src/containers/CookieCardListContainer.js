import React, {Component} from 'react'
import CookieCardList from './components/CookieCardList'

class CookieCardListContainer extends Component{
  constructor() {
    super()

    this.state = {
      cardz: []
    }
  }

  componentDidMount(){
    fetch('/cookiecardz')
    .then(resp => resp.json())
    .then(cardData => this.setState({
      cardz: cardData.cardz
    }))
  }

  render(){
    return(
      <CookieCardList books={this.state.books} />
    )
  }
}

export default CookieCardListContainer
