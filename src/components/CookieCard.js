import React from 'react';

const CookieCard = (props) => {
  const {recipe_name, recipe_ingredients, recipe_steps} = props
  console.log("props:",props.card);
  return (
    <div className="cookie-card">
    <div className="title">name: {props.recipe_name}</div>
    <div>ingredients: {props.recipe_ingredients}</div>
    <div>steps: { props.recipe_steps }</div>
    </div>
  )
}

export default CookieCard
