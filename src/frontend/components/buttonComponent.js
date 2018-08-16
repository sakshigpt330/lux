import PropTypes from 'prop-types';
import React from 'react';

const BUTTON = (props) => {
  const {
    label, className, type, onClick,
  } = props;
  return (
    <button
      type={type || 'button'}
      className={className}
      onClick={
        onClick ? () => onClick() : () => console.log('button clicked')
      }
    >
      {label}
    </button>
  );
};

BUTTON.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default BUTTON;
