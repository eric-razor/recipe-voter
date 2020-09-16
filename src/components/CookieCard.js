import React from 'react';
import {Link} from 'react-router-dom'

const CookieCard = ({card}) => {
  return (
    <div className="cookie-card">
      <div>{card.recipe_name}</div>
      <div>{card.recipe_ingredients}</div>
      <div>{card.recipe_steps }</div>
      <Link to={`/cookiecards/${card.id}/edit`}>Edit</Link>
      <br/>
    </div>
  )
}

export default CookieCard
