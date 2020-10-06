import React from 'react';
import {connect} from 'react-redux'
import {postPantryInput,updatePantryInput} from '../actions/pantryInput'
import '../styles/PantryInput.css'

const PantryInput = ({pantryInput, updatePantryInput, handleSubmit, postPantryInput, uid, history}) => {

  const handleChange = (e) => {
    const {name, value} = e.target
    updatePantryInput(name, value)
  }

  const submit = (e) => {
    e.preventDefault()

    postPantryInput(pantryInput,uid, history)
  }

  return(
    <div className="pantry-input">

    <form onSubmit={submit}>
      <section>
        <label htmlFor="item_name">Item: </label>
            <input
              className="item-name"
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
              className="submit-item-btn"
              id="submit"
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

export default connect(mapState,{postPantryInput,updatePantryInput})(PantryInput);
