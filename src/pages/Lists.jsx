import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import DataList from '../components/DataList';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi } from '../redux/action';

const Lists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { apiData } = useSelector(state => ({
    apiData: state.apiData.data,
  }));
  /* 아이템 개수와 현재 로딩 상태 */
  const [state, setState] = useState({ itemCount: 0, isLoading: false });
  /* fake 비동기 아이템 로드 */
  const fetchItems = async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    await dispatch(getDataFromApi());
    setState(prev => ({
      itemCount: prev.itemCount + 9,
      isLoading: false,
    }));
  };
  /* 초기 아이템 로딩 */
  useEffect(() => {
    fetchItems();
  }, []);
  /* 타겟 엘리먼트 */
  const target = useRef(null);
  /* 인터섹션 callback */
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await fetchItems();
      observer.observe(entry.target);
    }
  };
  /* 옵저버 등록 */
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
    observer.observe(target.current);
    return () => observer.disconnect();
  }, []);
  const { itemCount, isLoading } = state;
  // const { apiData } = useSelector(state => ({
  //   apiData: state.apiData.data,
  // }));

  // useEffect(() => {
  //   dispatch(getDataFromApi());
  // }, [apiData]);

  // console.log(apiData);

  return (
    <Wrap>
      <Nav>
        <IoIosArrowBack size={24} onClick={() => navigate('/')} />
        <h2>데이터 목록</h2>
      </Nav>
      <ul>
        {[...apiData, itemCount].map((item, idx) => {
          console.log(item);
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
      <div ref={target} className="Loading">
        {isLoading && 'Loading...'}
      </div>
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
`;

export default Lists;
