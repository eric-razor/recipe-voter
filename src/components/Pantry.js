import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Pantry.css'

const Pantry = ({items}) => {
  return (
    <div className="pantry-list">
      { items.map(item =>
          <div className="item-list" key={item.id}>
            <ul>
              <li className="item">
                {item.item_name}
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }

export default Pantry
