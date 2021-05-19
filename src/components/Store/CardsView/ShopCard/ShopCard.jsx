import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import ProductModel from '../../../../models/ProductModel';
import './ShopCard.css';

export default function ShopCard({card}) {
  const {name, price, color, img} = card;

  return (
    <div className="col-xs-12 col-sm-6 col-lg-4">
      <div className="shop-card">
        <div className="title">
          {name}
        </div>
        <div className="desc">
          {color}
        </div>
        <div className="slider">
          <figure>
              <img src={img} alt={name}/>
          </figure>
        </div>

        <div className="cta">
          <div className="price">${price}</div>
          <Button label="Add to cart"/>
        </div>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  card: PropTypes.instanceOf(ProductModel).isRequired
};
