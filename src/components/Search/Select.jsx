import React from 'react';
import PropTypes from 'prop-types';
const Select = ({ options, changeSearchTheme }) => {
  const changeSelectTheme = ({ target }) => changeSearchTheme(target.value);
  return (
    <select name="job" onChange={changeSelectTheme}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  changeSearchTheme: PropTypes.func,
};

export default Select;
