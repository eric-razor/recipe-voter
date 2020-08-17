import React from 'react';
import CookieCard from './CookieCard';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const CookieCardList = ({cookiecardz}) => (
    <div className="cookie-cardz-list">
    {cookiecardz.map(card => <CookieCard recipe_name={card.recipe_name} recipe_ingredients={card.recipe_ingredients} recipe_steps={card.recipe_steps} /> )}
    </div>
  )

const mapState = state => {
  return({
    cookiecards: state.cookiecards
  })
}

export default connect(mapState)(CookieCardList)
