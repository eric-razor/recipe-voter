import React from 'react';
import CookieCard from './CookieCard';
import '../styles/CookieCardList.css'
import {Link} from 'react-router-dom'

const CookieCardList = ({cookieCards, handleEdit, handleDelete}) => {
  return (
    <div className="cookie-cards-list">
      {cookieCards.map(card =>
          <div key={card.id}>
            <Link key={card.id} to={`/cookiecards/${card.id}`}>
              <CookieCard
                recipe_name={card.recipe_name}
                recipe_ingredients={card.recipe_ingredients}
                recipe_steps={card.recipe_steps}
              />
            </Link>
            <button onClick={handleEdit}> Edit </button>
            <button onClick={handleDelete}> Delete </button>
          </div>
        )}
      </div>
    )
  }

export default CookieCardList
