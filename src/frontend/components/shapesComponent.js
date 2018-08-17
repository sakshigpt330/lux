import PropTypes from 'prop-types';
import React from 'react';

const SHAPES = (props) => {
  const { classname, children, color } = props;
  return (
    <div
      className={classname}
      style={{backgroundColor: color}} >
      {children}
    </div>
  );
};

SHAPES.propTypes = {
  color: PropTypes.string,
  classname: PropTypes.string,
};

export default SHAPES;
