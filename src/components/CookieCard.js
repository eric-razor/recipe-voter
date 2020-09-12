import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteCookieCard} from '../actions/cookieCards'

const CookieCard = ({card}) => {

  return (
    <div className="cookie-card">
    <div>{card.recipe_name}</div>
    <div>{card.recipe_ingredients}</div>
    <div>{card.recipe_steps }</div>
    <Link to={`/cookiecards/${card.id}/edit`}>Edit</Link>
    <br/>
    <Link to={`/cookiecards/${card.id}/edit`}>Delete card</Link>
    </div>
  )
}

export default CookieCard
