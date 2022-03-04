import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import Modal from './Modal';

const DataList = ({ item, title, address, tel, message, idx }) => {
  const [showModal, setShowModal] = useState(false);
  // console.log(item);

  return (
    <>
      <Box onClick={() => setShowModal(true)}>
        <p>{title}</p>
        <p>{address}</p>
        <p>{tel}</p>
        {message ? (
          <Messsage>
            <i>
              <FaPen />
            </i>
            {message}
          </Messsage>
        ) : null}
      </Box>
      {/* 모달 */}
      {showModal ? (
        <Modal
          item={item}
          title={title}
          address={address}
          tel={tel}
          message={message}
          setShowModal={setShowModal}
          idx={idx}
        />
      ) : null}
    </>
  );
};

const Box = styled.li`
  max-width: 388px;
  border-radius: 6px;
  padding: 21px;
  margin: 20px auto;
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
    :nth-child(2) {
      color: var(--gray);
      line-height: 1.5;
    }
  }
`;

const Messsage = styled.p`
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
`;

DataList.propTypes = {
  // itemCount: PropTypes.number,
  item: PropTypes.object,
  title: PropTypes.string,
  address: PropTypes.string,
  tel: PropTypes.string,
  message: PropTypes.string,
  idx: PropTypes.number,
};

export default DataList;
