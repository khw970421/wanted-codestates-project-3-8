import React, { useEffect } from 'react';
import styled from 'styled-components';
import DataList from '../components/DataList';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi } from '../redux/action';
import { getData } from '../utils/axios';

const Lists = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { apiData } = useSelector(state => ({
    apiData: state.apiData.data,
  }));
  const getDatafromStore = () => {
    dispatch(getDataFromApi());
  };

  useEffect(() => {
    getDatafromStore();
  }, []);

  console.log(apiData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrap>
      <Nav>
        <IoIosArrowBack size={24} onClick={() => navigate('/')} />
        <h2>데이터 목록</h2>
      </Nav>
      <ul>
        <DataList
          title={apiData.name}
          address={apiData.address}
          tel={apiData.ph}
        />
        {/* {res.data.body.map(({ NM, ADRES, TELNO }, idx) => (
          <DataList key={idx} title={NM} address={ADRES} tel={TELNO} />
        ))} */}
      </ul>
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
