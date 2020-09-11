import React from 'react';
import {connect} from 'react-redux'

const CookieCard = (props) => {
  const {recipe_name, recipe_ingredients, recipe_steps} = props
  return (
    <div className="cookie-card">
    <div className="title">{props.recipe_name}</div>
    <div>{props.recipe_ingredients}</div>
    <div>{ props.recipe_steps }</div>
    </div>
  )
}

export default CookieCard
