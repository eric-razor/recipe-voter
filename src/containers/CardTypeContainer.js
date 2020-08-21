import React, {Component} from 'react'
import {connect} from 'react-redux'
import CardTypeList from '../components/CardTypeList'

class CardTypeContainer extends Component {

  constructor() {
    super()
  }

  componentDidMount(){
    // this.props.getCookieCards()
    // make categories action
  }

  render(){
    return(
      <div className="category-containter">
      categories:
        <CardTypeList categories={this.props.categories} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapState)(CardTypeContainer)
