import React from 'react';
import '../styles/Pantry.css'
import { Link } from 'react-router-dom'
import {deletePantryItem} from '../actions/pantry'

const Pantry = ({items}) => {
  return (
    <div className="pantry-list">
      { items.map(item =>
          <div className="item-list" key={item.id}>
            <ul>
              <li className="item">
                <button className="delete-pantry-item-btn" onClick={() => deletePantryItem(item.id)}>{item.item_name}</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }

export default Pantry
