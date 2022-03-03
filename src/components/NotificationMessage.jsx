import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotificationMessage = ({ state }) => {
  return (
    <div>
      {state.length === 0 ? null : <MessageContainer>{state}</MessageContainer>}
    </div>
  );
};

const MessageContainer = styled.div`
  position: fixed;
  top: 10vh;
  left: 48vw;
  background: #4eae3a;
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
