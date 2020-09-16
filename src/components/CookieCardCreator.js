import React from 'react';
import CookieCardForm from './CookieCardForm'
import {connect} from 'react-redux'
import {postCookieCard} from '../actions/cookieCards'

const CookieCardCreator =({history, postCookieCard}) => {
  const handleSubmit = (newCookieCard, uid, handleSubmit) => {
    postCookieCard({
      ...newCookieCard,
      uid
    }, history)
  }
  return <CookieCardForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, {postCookieCard})(CookieCardCreator)
