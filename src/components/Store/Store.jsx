import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductModel from '../../models/ProductModel';
import IconSwitch from './IconSwitch/IconSwitch';
import ListView from './ListView/ListView';
import CardsView from './CardsView/CardsView';
import './Store.css';

export default function Store({products}) {
  const [icon, setView] = useState('view_list');

  const onSwitch = () => {
    setView(prevView => prevView === 'view_list' ? 'view_module' : 'view_list');
  };

  const renderView = icon => {
    if (icon === 'view_list') {
      return <ListView items={products} />;
    }
    return <CardsView cards={products} />;
  };

  return (
    <div>
      <div className="toolbar">
        <IconSwitch icon={icon} onSwitch={onSwitch}/>
      </div>
      {renderView(icon)}
    </div>
  )
}

Store.propTypes = {
  products: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel)).isRequired
};
