import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const NotificationMessage = () => {
  const state = useSelector(state => state.notificationReducer.notification);
  console.log(state);
  return (
    <div>
      {state.length === 0 ? null : (
        <MessageContainer state={state}>{state}</MessageContainer>
      )}
    </div>
  );
};

const MessageContainer = styled.div`
  position: fixed;
  top: 10vh;
  left: 48vw;
  z-index: 999;
  background: ${props =>
    props.state === '메모를 입력해주세요.' ? 'red' : '#4eae3a'};
  border-radius: 5px;
  color: white;
  width: 219px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  animation: txt_blur 2s;

  @keyframes txt_blur {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

NotificationMessage.propTypes = {
  state: PropTypes.string,
};

export default NotificationMessage;
