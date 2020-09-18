import React from 'react';
import {Link} from 'react-router-dom'

const Pantry = ({items}) => {
  return (
    <div className="pantry-list">
      { items.map(item =>
          <div key={item.id}>
            <Link key={item.id} to={`/pantry/${item.id}`}>
            {item.item_name}
            </Link>
          </div>
        )}
      </div>
    )
  }

export default Pantry
