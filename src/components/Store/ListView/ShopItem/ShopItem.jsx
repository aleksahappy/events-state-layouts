import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button'
import ProductModel from '../../../../models/ProductModel';
import './ShopItem.css';

export default function ShopItem({item}) {
  const {name, price, color, img} = item;

  return (
    <li className="shop-item">
      <div className="thumb">
        <figure>
          <img src={img} alt={name}/>
        </figure>
      </div>
      <div className="title">
        {name}
      </div>
      <div className="desc">
        {color}
      </div>
      <div className="price">${price}</div>
      <Button label="Add to cart"/>
    </li>
  );
}

ShopItem.propTypes = {
  item: PropTypes.instanceOf(ProductModel).isRequired
};
