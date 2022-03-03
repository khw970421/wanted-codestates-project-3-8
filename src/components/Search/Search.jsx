import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import SaveContents from './SaveContents';

const Search = ({
  options = { name: '이름', address: '주소', memo: '메모' },
}) => {
  // select option인 searchTheme와 input 검색 결과값인 searchContent 상태 설정
  const [searchTheme, setSearchTheme] = useState('name');
  const [searchContent, setSearchContent] = useState('');
  return (
    <>
      <Select
        options={options}
        changeSearchTheme={theme => setSearchTheme(theme)}
      />
      <Input changeSearchContent={content => setSearchContent(content)} />
      <SaveContents searchTheme={searchTheme} searchContent={searchContent} />
    </>
  );
};

Search.propTypes = {
  options: PropTypes.array,
};

export default Search;
