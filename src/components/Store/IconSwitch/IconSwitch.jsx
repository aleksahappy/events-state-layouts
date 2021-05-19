import React from 'react';
import PropTypes from 'prop-types';
import './IconSwitch.css';

export default function IconSwitch({icon, onSwitch}) {
  return (
    <div className="icon-switch material-icons" onClick={() => onSwitch()}>
      {icon}
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
};
