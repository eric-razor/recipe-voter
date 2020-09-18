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
      <>
        <div className="cookie-jar">
        <h1> cookies: </h1>
        <CookieCardList cards={this.props.cookieCards} />
        </div>
      </>
    )
  }
}

const mapState = ({cookieCards}) => {
  return {
    cookieCards
  }
}

export default connect(mapState, {getCookieCards})(CookieCardListContainer)
