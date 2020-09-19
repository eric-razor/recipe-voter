import React, {Component} from 'react'
import {connect} from 'react-redux'
import Pantry from '../components/Pantry'
import PantryInput from '../components/PantryInput'

class PantryContainer extends Component {

  render(){
    return(
      <div className="sort">
        <PantryInput />
        <Pantry items={this.props.pantryItems} />
      </div>
    )
  }
}

const mapState = ({pantryItems}) => {
  return {
    pantryItems
  }
}

export default connect(mapState)(PantryContainer)
