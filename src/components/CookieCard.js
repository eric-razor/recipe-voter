import React from 'react';
import '../styles/Cookiecard.css'

const CookieCard = ({ recipe_name, recipe_ingredients, recipe_steps }) => (
    <div className="cookie-card">
      <h1>{recipe_name}</h1>
      <br/>
      <ul>
        <li>{recipe_ingredients}</li>
      </ul>
      <h3>{ recipe_steps }</h3>
    </div>
  )

export default CookieCard;
