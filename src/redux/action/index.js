export const NOTIFY = 'NOTIFY';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const notify =
  (message, time = 500) =>
  dispatch => {
    dispatch(showMessage(message, time));
    setTimeout(() => {
      dispatch(deleteMessage());
    }, time);
  };

export const showMessage = (message, time) => {
  return {
    type: SHOW_MESSAGE,
    payload: { message, time },
  };
};

export const deleteMessage = () => {
  return {
    type: DELETE_MESSAGE,
  };
};
