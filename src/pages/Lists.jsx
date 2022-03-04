import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import DataList from '../components/DataList';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi, getPageData } from '../redux/action';

const Lists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { apiData } = useSelector(state => ({
    apiData: state.apiData.data,
  }));
  const { pageCount } = useSelector(state => state.pageReducer);
  useEffect(() => {
    dispatch(getDataFromApi(pageCount));
    dispatch(getPageData(pageCount));
  }, []);
  // const { apiData } = useSelector(state => ({
  //   apiData: state.apiData.data,
  // }));

  // useEffect(() => {
  //   dispatch(getDataFromApi());
  // }, [apiData]);

  // console.log(apiData);

  const scroll = e => {
    if (document.body.offsetHeight < e.target.scrollTop + 200) {
      console.log('scroll로 인한 이벤트 시작');

      //Todo : throttle
      dispatch(getDataFromApi(pageCount));
      dispatch(getPageData(pageCount));
    }
  };
  const debounce = (callback, delay) => {
    let timer;
    console.log(timer);
    return arg => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        return callback(arg);
      }, delay);
    };
  };

  return (
    <Wrap onScroll={debounce(scroll, 400)}>
      <Nav>
        <IoIosArrowBack size={24} onClick={() => navigate('/')} />
        <h2>데이터 목록</h2>
      </Nav>
      <ul>
        {apiData.map((item, idx) => {
          // console.log(item);
          return (
            <DataList
              item={item}
              key={idx}
              title={item.name}
              address={item.address}
              tel={item.phoneNumber}
            />
          );
        })}
      </ul>
      {/* <div ref={target} className="Loading">
        {isLoading && 'Loading...'}
      </div> */}
      {/* <button onClick={click}>btn</button> */}
    </Wrap>
  );
};

const Nav = styled.nav`
  display: flex;
  padding-bottom: 10px;
  margin: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;
  line-height: 1.5;
  svg {
    transform: translateX(10px);
    transition: all 0.2s;
    cursor: pointer;
    :hover {
      transform: translateX(0px);
    }
  }
  h2 {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Wrap = styled.div`
  max-width: 428px;
  margin: 20px auto;
  max-height: 900px;
  overflow-y: scroll;
`;

export default Lists;
