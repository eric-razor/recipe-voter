import React from 'react';
import {connect} from 'react-redux'
import { updateCookieCardForm} from '../actions/newCookieCardForm'


const CookieCardMaker = ({recipe_name, recipe_ingredients,recipe_steps, updateCookieCardForm,history}) => {

  const handleChange = (e) =>{
    const {name, value} = e.target
    updateCookieCardForm(name,value)

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="recipe-name">Recipe name:</label>
            <div className="recipe-name-input-box">
              <input
                id="recipe-name"
                name="recipe_name"
                type="text"
                value={recipe_name}
                onChange={handleChange}
                required
              />
            </div>
        </section>

        <section>
          <label htmlFor="recipe-ingredients"> Recipe ingredients:</label>
            <div className="recipe-ingredients-input-box">
              <textarea
                id="recipe-ingredients"
                rows="5"
                cols="33"
                name="recipe_ingredients"
                value={recipe_ingredients}
                onChange={handleChange}
                required
              />
            </div>
        </section>

        <section>
          <label htmlFor="recipe-steps">Recipe steps:</label>
            <div className="recipe-steps-input-box">
              <textarea
                id="recipe-steps"
                rows="5"
                cols="33"
                name="recipe_steps"
                value={recipe_steps}
                onChange={handleChange}
                required />
            </div>
        </section>

        <section>
              <input
                value="Create Card! :)"
                type="submit"
              />
        </section>
      </form>
    </div>
  )
}

const mapState = state => {
  const {recipe_name, recipe_steps, recipe_ingredients } = state.cookiecard
  return{
    recipe_name,
    recipe_ingredients,
    recipe_steps
  }
}

export default connect(mapState,{updateCookieCardForm} )(CookieCardMaker);
