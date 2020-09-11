import React, {Component} from 'react';
import CookieCardForm from './CookieCardForm'
import {updateCard, deleteCard} from '../action/cookieCards'
import {editCookieCardFormData, clearCookieCardForm} from '../actions/newCookieCardForm'
import {connect} from 'react-redux'


class CookieCardEditor extends Component {
  componentDidMount(){
    this.props.card && this.props.editCookieCardFormData(this.props.card)
  }

  componentDidUpdate(prevProps){
    this.props.card && !prevProps.card && this.props.editCookieCardFormData(this.props.card)
  }

  componentWillUnmount(){
    this.props.clearCookieCardForm()
  }

  handleSubmit = (cardData) => {
    const {updateCard, card, history} = this.props
    updateCard({
      ...cardData,
      cardId: card.id
    }, history)
  }

  handleEdit(){
    console.log("clicked");
  }

  render(){
    const {history, deleteCard, card} = this.props
    const cardId = card ? card.id : null
    return <>
              <CookieCardForm editMode history={history} handleSubmit={this.handleSubmit} />
              <br />
              <button onClick={() => deleteCard(cardId, history)}>Delete this card</button>
           </>
  }
}

export default connect(null, {updateCard, editCookieCardFormData, clearCookieCardForm, deleteCard})(CookieCardEditor)
