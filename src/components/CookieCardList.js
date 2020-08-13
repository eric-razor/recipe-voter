import React from 'react';
import CookieCard from './CookieCard';

const CookieCardList = ({cookiecardz}) => (
    <div className="cookie-cardz-list">
    {cookiecardz.map(card => <CookieCard recipe_name={card.recipe_name} recipe_ingredients={card.recipe_ingredients} recipe_steps={card.recipe_steps} /> )}
    </div>
  )

export default CookieCardList;
