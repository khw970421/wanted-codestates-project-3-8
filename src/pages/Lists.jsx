import React, { useEffect } from 'react';
import styled from 'styled-components';
import DataList from '../components/DataList';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Lists = () => {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get(
      `/getRecreationalForestInfo?serviceKey=${process.env.REACT_APP_SERVICE_KEY}`,
    );
    setState(res.data.body);
  };
  return (
    <Wrap>
      <Nav>
        <IoIosArrowBack size={24} onClick={() => navigate('/')} />
        <h2>데이터 목록</h2>
      </Nav>
      <ul>
        {state.map(({ NM, ADRES, TELNO }, idx) => (
          <DataList title={NM} address={ADRES} tel={TELNO} key={idx} />
        ))}
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
