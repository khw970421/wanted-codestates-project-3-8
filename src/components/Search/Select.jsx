import React from 'react';
import PropTypes from 'prop-types';
const Select = ({ options, changeSearchTheme }) => {
  const changeSelectTheme = ({ target }) => changeSearchTheme(target.value);
  //key값으로 접근하여 조회하기 위해 value에 key값 설정
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
