import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AddListBtn = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Btn onClick={() => navigate('/list')}>
        <i />
      </Btn>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 428px;
  margin: auto;
`;

const Btn = styled.button`
  position: absolute;
  bottom: 30px;
  right: 0px;
  width: 80px;
  height: 80px;
  border: 0;
  border-radius: 50%;
  margin: none;
  padding: none;
  background-color: var(--main-color);
  transition: all 0.3s;
  opacity: 0.7;
  cursor: pointer;
  i {
    ::after {
      position: absolute;
      display: block;
      background-color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 4px;
      border-radius: 4px;
      content: '';
    }
    ::before {
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      width: 4px;
      height: 40px;
      border-radius: 4px;
      content: '';
    }
  }
  :hover {
    opacity: 1;
  }
`;

export default AddListBtn;
