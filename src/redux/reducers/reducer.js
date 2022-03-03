import { combineReducers } from 'redux';
import placeReducer from './placeReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({ placeReducer, notificationReducer });

export default rootReducer;
