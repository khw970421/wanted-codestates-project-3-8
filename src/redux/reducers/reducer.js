import { combineReducers } from 'redux';
import placeReducer from './placeReducer';
import notificationReducer from './notificationReducer';
import { getApiDataHandler } from "./dataReducer";

const rootReducer = combineReducers({
  placeData: placeReducer,
  notificationReducer,
  apiData: getApiDataHandler,
});

export default rootReducer;
