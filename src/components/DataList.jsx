import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';

const DataList = ({ title, address, tel, massage }) => {
  return (
    <Box>
      <p>{title}</p>
      <p>{address}</p>
      <p>{tel}</p>
      {massage ? (
        <p>
          <i>
            <FaPen />
          </i>
          {massage}
        </p>
      ) : null}
    </Box>
  );
};

const Box = styled.li`
  max-width: 388px;
  border-radius: 6px;
  padding: 21px;
  margin-bottom: 20px;
  margin: auto;
  box-shadow: 3px 3px 8px 1px rgba(140, 141, 146, 0.25);
  box-sizing: border-box;
  color: #000;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 8px 1px #ccc;
  }
  p {
    :first-child {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 14px;
    }
    :nth-child(2),
    :nth-child(3) {
      color: var(--gray);
      line-height: 1.2;
    }
    :last-child {
      display: inline-block;
      max-width: 360px;
      margin-top: 18px;
      color: var(--main-color);
      font-weight: bold;
      font-size: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      i {
        margin-right: 5px;
      }
    }
  }
`;

DataList.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  tel: PropTypes.string,
  massage: PropTypes.string,
};

export default DataList;
