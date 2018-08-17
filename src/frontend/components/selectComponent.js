import PropTypes from 'prop-types';
import React from 'react';

const SELECT = (props) => {
  const { className, placeholder, options, defaultVal, onChange } = props;
  return (
    <select
      className={className}
      placeholder={placeholder}
      defaultValue={defaultVal}
      onChange={onChange}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(data => (
        <option key={data.label} value={data.value}>{data.label}</option>
      ))}
    </select>
  );
};

SELECT.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default SELECT;
