import React, {Component} from 'react'
import {connect} from 'react-redux'
import Pantry from '../components/Pantry'
import PantryInput from '../components/PantryInput'

class PantryContainer extends Component {

  render(){
    return(
      <div className="sort">
        <PantryInput />
        <Pantry items={this.props.items} />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    items: state.pantryItems,
    itemQuery: state.pantryInput
  }
}

export default connect(mapState)(PantryContainer)
