import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { notify } from '../redux/action';
import { savePlaceItem } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Modal = ({ title, address, tel, message, setShowModal, item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const memo = useRef(['memo']);
  const [comment, setComment] = useState('');

  const onChangeMessage = e => {
    setComment({ ...item, message: e.target.value });
  };

  const onSaveDataHandler = (e) => {
    e.preventDefault();
    if (memo.current.value === '') {
      dispatch(notify('메모를 입력해주세요.', 1500));
    } else {
      dispatch(savePlaceItem(comment));
      setShowModal(false);
      dispatch(notify('저장 되었습니다.', 1500));
      navigate('/');
    }
  };

  return (
    <>
      <Bg onClick={() => setShowModal(false)}></Bg>
      <Box>
        <h3>저장하기</h3>
        <i onClick={() => setShowModal(false)}>
          <IoIosClose size={30} />
        </i>
        <ul>
          <li>
            <label htmlFor="title">이름</label>
            <p>{title}</p>
          </li>
          <li>
            <label htmlFor="address">주소</label>
            <p>{address}</p>
          </li>
          <li>
            <label htmlFor="tel">연락처</label>
            <p>{tel}</p>
          </li>
          <li>
            <label htmlFor="massage">메모</label>
            <textarea
              name="massage"
              id=""
              cols="30"
              ref={memo}
              rows="10"
              value={message}
              placeholder="내용을 입력해주세요"
              onChange={onChangeMessage}
            >{message}</textarea>
          </li>
        </ul>
        <Btn>
          {message ? (
            <>
              <DeleteBtn
                type="button"
                onClick={() => {
                  setShowModal(false);
                  dispatch(notify('삭제 되었습니다.', 1500));
                }}
              >
                삭제
              </DeleteBtn>
              <button
                type="button"
                onClick={() => {
                  if (memo.current.value === '') {
                    dispatch(notify('메모를 입력해주세요.', 1500));
                  } else {
                    setShowModal(false);
                    dispatch(notify('수정 되었습니다.', 1500));
                  }
                }}
              >
                수정
              </button>
            </>
          ) : (
            <button type="button" onClick={e => onSaveDataHandler(e, item)}>
              저장
            </button>
          )}
        </Btn>
      </Box>
    </>
  );
};
const Bg = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.5);
  overflow: hidden;
  z-index: 1;
`;

const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 360px;
  min-height: 374px;
  padding: 20px;
  border-radius: 8px;
  margin: auto;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;
  h3 {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
  li {
    margin: 20px 0;
  }
  label {
    display: block;
    margin-bottom: 8px;
    color: var(--light-gray);
    font-size: 15px;
  }
  p {
    padding-left: 10px;
    font-weight: bold;
    word-wrap: break-word;
  }
  textarea {
    height: 36px;
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 1px solid var(--light-gray);
    border-radius: 6px;
    box-sizing: border-box;
    resize: none;
    ::placeholder {
      color: var(--light-gray);
    }
  }
  i {
    position: absolute;
    right: 10px;
    top: 5px;
    padding: 10px;
    cursor: pointer;
  }
`;

const Btn = styled.div`
  display: flex;
  button {
    width: 100%;
    height: 40px;
    color: white;
    border: none;
    border-radius: 6px;
    background-color: var(--main-color);
    font-size: 16px;
    cursor: pointer;
    :nth-child(2) {
      margin-left: 10px;
    }
  }
`;

const DeleteBtn = styled.button`
  background-color: var(--red) !important;
`;

Modal.propTypes = {
  item: PropTypes.object,
  title: PropTypes.string,
  address: PropTypes.string,
  tel: PropTypes.string,
  message: PropTypes.string,
  setShowModal: PropTypes.func,
};

export default Modal;
