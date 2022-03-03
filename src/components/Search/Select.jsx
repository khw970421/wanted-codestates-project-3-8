import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = ({ options, changeSearchTheme }) => {
  const changeSelectTheme = ({ target }) => changeSearchTheme(target.value);
  //key값으로 접근하여 조회하기 위해 value에 key값 설정
  return (
    <SelectBox name="job" onChange={changeSelectTheme}>
      {Object.entries(options).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </SelectBox>
  );
};

const SelectBox = styled.select`
  width: 88px;
  height: 38px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
`;

Select.propTypes = {
  options: PropTypes.object,
  changeSearchTheme: PropTypes.func,
};

export default Select;
