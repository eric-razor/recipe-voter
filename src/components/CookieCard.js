import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/CookieCard.css'

const CookieCard = ({card}) => {
  return (
    <div className="cookie-card">
      <h1 className="recipe-name">{card.recipe_name}</h1>
      <div className="recipe-ingredients"><p>Ingredients: </p>{card.recipe_ingredients}</div>
      <div className="recipe-name"><p>Steps: </p> {card.recipe_steps }</div>
      <br/>
      <Link className="edit-card-btn" to={`/cookiecards/${card.id}/edit`}>Edit</Link>
      <br/>
    </div>
  )
}

export default CookieCard
