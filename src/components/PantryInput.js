import React from 'react';
import {connect} from 'react-redux'
import {postPantryInput} from '../actions/pantryInput'

const PantryInput = ({pantryInput, handleSubmit}) => {

  const handleChange = (e) => {
    const {name, value} = e.target
    postPantryInput(name, value)
  }

  const submit = (e) => {
    e.preventDefault()
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
              value={pantryInput.item_name}
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
    pantryInput: state.pantryInput.item_name,
    uid
  }
}

export default connect(mapState,{postPantryInput})(PantryInput);
