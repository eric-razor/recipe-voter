import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const CookieCard = ({card}) => {

  // const {recipe_name, recipe_ingredients, recipe_steps} = card
  return (
    card ?
    <div className="cookie-card">
    <div className="title">{card.recipe_name}</div>
    <div>{card.recipe_ingredients}</div>
    <div>{card.recipe_steps }</div>
    <Link to={`/cookiecards/${card.id}/edit`}>Edit</Link>
    </div> :
    <p> cookie card with no card data</p>
  )
}

export default CookieCard
