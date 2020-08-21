import React from 'react';
import CardType from './CardType';

 const CardTypeList = ({categories}) => {
    return (
      <div className="categories-list">
        {categories.map(category =>
          <div key={category.id}>
            <CardType
              category={category}
            />
          </div>
        )}
      </div>
    )
  }

export default CardTypeList;
