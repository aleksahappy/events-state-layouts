import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem/ShopItem';
import ProductModel from '../../../models/ProductModel';
import './ListView.css';

export default function ListView({items}) {
  return (
    <ul className="list">
      {items.map((item, i) => <ShopItem key={`item-${i}`} item={item}/>)}
    </ul>
  )
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel)).isRequired
};
