import React from 'react';
import '../styles/CookieCardList.css'
import {Link} from 'react-router-dom'

const CookieCardList = ({cards}) => {
  return (
    <div className="cookie-cards-list">
      {cards && cards.map(card =>
          <Link className="card-link" key={card.id} to={`/cookiecards/${card.id}`}>
          {card.recipe_name}
          </Link>
        )}
      </div>
    )
  }

export default CookieCardList
