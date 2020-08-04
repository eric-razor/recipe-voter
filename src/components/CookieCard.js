import React from 'react';

const CookieCard = ({ recipe_name, recipe_ingredients, recipe_steps }) => {
  return (
    <div className="cookie-card">
    <h1>{recipe_name}</h1>
    <br>
    <h2>{recipe_ingredients}</h2>
    <h3>{ recipe_steps }</h3>
    </div>
  )  
}

export default CookieCard;
