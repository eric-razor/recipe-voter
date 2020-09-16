import React, {Component} from 'react'
import {connect} from 'react-redux'

class SortCardContainer extends Component{

  render(){
    return(
      <div className="sort">
        sort
      </div>
    )
  }
}

const mapState = ({cookieCards}) => {
  return {
    cookieCards
  }
}

export default connect(mapState)(SortCardContainer)
