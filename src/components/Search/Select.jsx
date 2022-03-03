import React from 'react';
import PropTypes from 'prop-types';
const Select = ({ options, changeSearchTheme }) => {
  const changeSelectTheme = ({ target }) => changeSearchTheme(target.value);
  return (
    <select name="job" onChange={changeSelectTheme}>
      {Object.entries(options).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.object,
  changeSearchTheme: PropTypes.func,
};

export default Select;
