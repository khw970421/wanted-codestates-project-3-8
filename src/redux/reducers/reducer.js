import { combineReducers } from 'redux';
import placeReducer from './placeReducer';
import notificationReducer from './notificationReducer';
import pageReducer from './pageReducer';
import { getApiDataHandler } from './dataReducer';

const rootReducer = combineReducers({
  placeReducer,
  notificationReducer,
  pageReducer,
  apiData: getApiDataHandler,
});

export default rootReducer;
