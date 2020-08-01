import React from 'react';

const CookieCard = ({ recipe_name, img_url, recipe_steps }) => (
  <div className="cookie-card">
    <img src={ img_url } alt={recipe_name}/>
    <h1>{recipe_name}</h1>
    <br>
    <h3>{ recipe_steps }</h3>
  </div>
)

export default CookieCard;
