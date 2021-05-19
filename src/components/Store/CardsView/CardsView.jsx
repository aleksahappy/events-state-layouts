import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard/ShopCard';
import ProductModel from '../../../models/ProductModel';

export default function CardsView({cards}) {
  return (
    <div className="row">
      {cards.map((card, i) => <ShopCard key={`card-${i}`} card={card}/>)}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel)).isRequired
};
