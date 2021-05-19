import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({label}) {
  return (
    <button className="btn">
      {label}
      <span className="bg"/>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired
};
