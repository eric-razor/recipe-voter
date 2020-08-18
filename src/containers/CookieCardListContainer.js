import React, {Component} from 'react'
import {connect} from 'react-redux'
import CookieCardList from '../components/CookieCardList'
import {getCookieCards} from '../actions/cookieCards'

class CookieCardListContainer extends Component{

  constructor() {
    super()

    // this.state = {
    //   cookiecards: []
    // }
  }

  componentDidMount(){
    this.props.getCookieCards()
  }

  render(){
    return(
      <div className="cookie-list">
      cookies:
        <CookieCardList cookiecards={this.props.cookiecards} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    cookiecards: state.cookiecards
  }
}

export default connect(mapState, {getCookieCards})(CookieCardListContainer)
