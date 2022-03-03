import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search/Search';
import { getDataFromApi } from '../action';

const Main = () => {
  const { apiData } = useSelector(state => ({
    apiData: state.apiData.data,
  }));

  console.log(apiData);

  const dispatch = useDispatch();

  const onClickGetData = () => {
    dispatch(getDataFromApi());
  };

  return (
    <div>
      <Search />
      <button onClick={onClickGetData} />
    </div>
  );
};

export default Main;
