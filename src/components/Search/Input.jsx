import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ changeSearchContent }) => {
  const searchSaveTheme = ({ target }) => {
    changeSearchContent(target.value);
  };
  const debounce = (callback, delay) => {
    let timer;
    return arg => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        return callback(arg);
      }, delay);
    };
  };
  return (
    <InputText
      placeholder="검색어를 입력해주세요"
      onChange={debounce(searchSaveTheme, 400)}
    />
  );
};

const InputText = styled.input`
  height: 36px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
`;

Input.propTypes = {
  changeSearchContent: PropTypes.func,
};
export default Input;
