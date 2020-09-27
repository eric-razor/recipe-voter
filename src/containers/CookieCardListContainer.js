import React, {Component} from 'react'
import {connect} from 'react-redux'
import CookieCardList from '../components/CookieCardList'
import {getCookieCards} from '../actions/cookieCards'
import '../styles/CookieCardListContainer.css'

class CookieCardListContainer extends Component{

  componentDidMount(){
    this.props.getCookieCards()
  }

  render(){
    return(
      <>
        <div className="cookie-jar">
          <div className="cookie">
            <h1> Cookie Cards </h1>
          </div>
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
