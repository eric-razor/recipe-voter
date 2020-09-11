import React from 'react';
import {connect} from 'react-redux'

const CookieCard = ({card}) => {
  const {recipe_name, recipe_ingredients, recipe_steps} = card
  return (
    <div className="cookie-card">
    <div className="title">{recipe_name}</div>
    <div>{recipe_ingredients}</div>
    <div>{ recipe_steps }</div>
    </div>
  )
}

export default CookieCard
