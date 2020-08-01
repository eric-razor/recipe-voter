import React from 'react';
import CookieCard from './CookieCard';

const CookieCardList = ({cardz}) => {
  <div className="cookie-cardz-list">
    {cardz.map(card => <CookieCard recipe_name={card.recipe_name} img_url={card.img_url} recipe_steps={card.recipe_steps} /> )}
  </div>
}

export default CookieCardList;
