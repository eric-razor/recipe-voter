import React from 'react';
import {connect} from 'react-redux'
import { updateCookieCardForm} from '../actions/newCookieCardForm'
import {postCookieCard} from '../actions/cookieCardz'


const CookieCardMaker = ({newCookieCard, updateCookieCardForm,postCookieCard, userId,history}) => {
  const {recipe_name, recipe_steps, recipe_ingredients} = newCookieCard

  const handleChange = (e) =>{
    const {name, value} = e.target
    updateCookieCardForm(name,value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    postCookieCard(newCookieCard)

  }
  return (
    <div className="cookie-card">
      <form onSubmit={handleSubmit}>
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
                value="Create Card! :)"
                type="submit"
              />
        </section>
      </form>
    </div>
  )
}

const mapState = state => {
  return{
    newCookieCard: state.cookiecard
  }
}
// flexbox for sections
export default connect(mapState,{updateCookieCardForm, postCookieCard} )(CookieCardMaker);
