import { initialState } from './initialState';
import { SHOW_MESSAGE, DELETE_MESSAGE } from '../action/index';

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return Object.assign({}, state, { notification: action.payload.message });
    case DELETE_MESSAGE:
      return Object.assign({}, state, { notification: '' });
    default:
      return state;
  }
};

export default notificationReducer;
