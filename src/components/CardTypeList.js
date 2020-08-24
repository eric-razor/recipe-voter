import React from 'react';
import CardType from './CardType';
import {Link} from 'react-router-dom'

 const CardTypeList = ({categories}) => {
    return (
      <div className="categories-list">
        {categories.map(category =>
          <Link key={categories.id} to={`/categories/${category.cards}`}>
            <CardType
              category={category}
            />
          </Link>
        )}
      </div>
    )
  }

export default CardTypeList;
