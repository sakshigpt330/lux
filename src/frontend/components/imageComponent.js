import PropTypes from 'prop-types';
import React from 'react';

const IMAGE = (props) => {
  const {
    src, className, alt, onClick,
  } = props;
  return (
    src ? <img
      src={src}
      className={className}
      alt={alt}
      onClick={
        onClick ? () => onClick() : () => console.log('image clicked')
      }
    /> : null
  );
};

IMAGE.propTypes = {
  src: PropTypes.string.required,
  className: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default IMAGE;
