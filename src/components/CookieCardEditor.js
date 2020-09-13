import React, {Component} from 'react';
import CookieCardForm from './CookieCardForm'
import {updateCard, deleteCard, editCookieCard} from '../actions/cookieCards'
import {editCookieCardFormData, clearCookieCardForm} from '../actions/newCookieCardForm'
import {connect} from 'react-redux'


class CookieCardEditor extends Component {
  componentDidMount(){
    this.props.card && this.props.editCookieCardFormData(this.props.card)
  }
  //
  // componentDidUpdate(prevProps){
  //   this.props.card && !prevProps.card && this.props.editCookieCardFormData(this.props.card)
  // }
  //
  // componentWillUnmount(){
  //   this.props.clearCookieCardForm()
  // }
  handleSubmit = (cardData, uid) => {
    const {updateCard, card, history} = this.props
    editCookieCard({
      ...cardData,
      cardId: card.id,
      uid
    }, history)
  }

  render(){
    const {history, deleteCard, card} = this.props
    const cardId = card ? card.id : null
    return <>
              <CookieCardForm editMode handleSubmit={this.handleSubmit} />
              <br />
              <button onClick={() => deleteCard(cardId, history)}>Delete this card</button>
           </>
  }
}

export default connect(null, {updateCard, editCookieCardFormData, editCookieCard, clearCookieCardForm, deleteCard})(CookieCardEditor)
