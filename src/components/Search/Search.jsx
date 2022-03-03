import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import SaveContents from './SaveContents';

const Search = ({ options = ['name', 'address', 'memo'] }) => {
  const [searchTheme, setSearchTheme] = useState(options[0]);
  const [searchContent, setSearchContent] = useState([]);
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
