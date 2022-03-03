import React from 'react';
import PropTypes from 'prop-types';
const Input = ({ changeSearchContent }) => {
  const searchSaveTheme = ({ target }) => {
    console.log('search Input  : ', target.value);
    changeSearchContent(target.value);
  };
  return (
    <input placeholder="검색어를 입력해주세요" onChange={searchSaveTheme} />
  );
};
Input.propTypes = {
  changeSearchContent: PropTypes.func,
};
export default Input;
