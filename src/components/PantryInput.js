import React from 'react';
import {connect} from 'react-redux'
import {updatePantryInput} from '../actions/pantryInput'

const PantryInput = ({pantryInput, handleSubmit}) => {
  const {item_name} = pantryInput
  const handleChange = (e) => {
    const {name, value} = e.target
    updatePantryInput(name,value)
    debugger
  }

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(item_name)
  }
  return(
    <div className="pantry-input">

    <form onSubmit={submit}>
      <section>
        <label htmlFor="item_name">Item name:</label>
            <input
              id="item_name"
              name="item_name"
              type="text"
              value={item_name}
              onChange={handleChange}
              required
            />
      </section>

      <section>
            <input
              value="Add item"
              type="submit"
            />
      </section>
    </form>
    </div>

  )
}

const mapState = state => {
  const uid = state.user ? state.user.id : ""
  return{
    pantryInput: state.pantryInput,
    uid
  }
}

export default connect(mapState,{updatePantryInput})(PantryInput);
