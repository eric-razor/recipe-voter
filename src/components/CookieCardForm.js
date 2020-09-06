import React from 'react';
import {connect} from 'react-redux'
import { updateCookieCardForm} from '../actions/newCookieCardForm'


const CookieCardForm = ({newCookieCard, updateCookieCardForm, uid,history, editMode, handleSubmit}) => {
  const {recipe_name, recipe_steps, recipe_ingredients} = newCookieCard

  const handleChange = (e) =>{
    const {name, value} = e.target
    updateCookieCardForm(name,value)
  }

  return (
    <div className="cookie-card">
      <form onSubmit={e => {
        e.preventDefault()
        handleSubmit(newCookieCard)
      }}>
        <section>
          <label htmlFor="recipe_name">Recipe name:</label>
              <input
                id="recipe_name"
                name="recipe_name"
                type="text"
                value={recipe_name}
                onChange={handleChange}
                required
              />
        </section>

        <section>
          <label htmlFor="recipe_ingredients"> Recipe ingredients:</label>
              <textarea
                id="recipe_ingredients"
                rows="5"
                cols="33"
                name="recipe_ingredients"
                value={recipe_ingredients}
                onChange={handleChange}
                required
              />
        </section>

        <section>
          <label htmlFor="recipe_steps">Recipe steps:</label>
              <textarea
                id="recipe_steps"
                rows="5"
                cols="33"
                name="recipe_steps"
                value={recipe_steps}
                onChange={handleChange}
                required />
        </section>

        <section>
              <input
                value={editMode ? "Update card" : "Create card"}
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
    newCookieCard: state.newCookieCard,
    uid
  }
}

export default connect(mapState,{updateCookieCardForm})(CookieCardForm);
