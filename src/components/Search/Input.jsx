import React from 'react';
import PropTypes from 'prop-types';
const Input = ({ changeSearchContent }) => {
  const searchSaveTheme = ({ target }) => {
    console.log('search Input  : ', target.value);
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
    <input
      placeholder="검색어를 입력해주세요"
      onChange={debounce(searchSaveTheme, 400)}
    />
  );
};
Input.propTypes = {
  changeSearchContent: PropTypes.func,
};
export default Input;
