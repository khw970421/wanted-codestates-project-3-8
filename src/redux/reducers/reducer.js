import { combineReducers } from 'redux';
import savePlaceReducer from './savePlace';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({ savePlaceReducer, notificationReducer });

export default rootReducer;
