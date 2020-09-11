import React from 'react';
import CookieCard from './CookieCard';
import '../styles/CookieCardList.css'
import {Link} from 'react-router-dom'

const CookieCardList = ({cards, handleEdit, handleDelete}) => {
  return (
    <div className="cookie-cards-list">
      {cards && cards.map(card =>
          <div key={card.id}>
            <Link key={card.id} to={`/cookiecards/${card.id}`}>
            {card.recipe_name}
            </Link>
          </div>
        )}
      </div>
    )
  }


export default CookieCardList
