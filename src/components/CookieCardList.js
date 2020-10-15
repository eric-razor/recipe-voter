import React, {Component} from 'react';
import '../styles/CookieCardList.css'
import {Link} from 'react-router-dom'

class CookieCardListItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      vote: 0
    }
  }

  vote = (type) => {
    this.setState(state => ({
      vote: state.vote=== type ? 0 : type
    }))
    console.log(this.state.vote);
  }

  render() {
    const { vote } = this.state
    return (
      <div>
         <Link className="card-link" to={`/cookiecards/${this.props.card.id}`}>
            {this.props.card.recipe_name}
          </Link>
          {this.state.vote}

          <button id="upvote" onClick={(e) => this.vote(1)} className={vote === 1 ? 'active' : undefined} > upvote </button>
          <button id="downvote" onClick={(e) => this.vote(-1)} className={vote === -1 ? 'active' : undefined} > downvote </button>
      </div>
    )
  }
}


class CookieCardList extends Component {
  render(){
    return (
      <div className="cookie-cards-list">
            {this.props.cards && this.props.cards.map((card,key) =>
                  <div key={key}>
                    <CookieCardListItem card={card} />
                  </div>
              )}
        </div>
    )
  }
}

export default CookieCardList
