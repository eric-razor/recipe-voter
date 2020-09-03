import React, {Component} from 'react'
import {connect} from 'react-redux'
import CookieCardList from '../components/CookieCardList'
import {getCookieCards} from '../actions/cookieCards'

class CookieCardListContainer extends Component{

  componentDidMount(){
    this.props.getCookieCards()
  }

  render(){
    return(
      <div className="cookie-jar">
      cookies:
      <CookieCardList cookieCards={this.props.cookieCards} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    cookieCards: state.cookieCards
  }
}

export default connect(mapState, {getCookieCards})(CookieCardListContainer)
