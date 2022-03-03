import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AddListBtn = () => {
  const navigate = useNavigate();
  return (
    <Btn onClick={() => navigate('/list')}>
      <i />
    </Btn>
  );
};

const Btn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 40px;
  width: 80px;
  height: 80px;
  border: 0;
  border-radius: 50%;
  margin: none;
  padding: none;
  background-color: var(--main-color);
  transition: all 0.3s;
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
    opacity: 0.7;
  }
`;

export default AddListBtn;
