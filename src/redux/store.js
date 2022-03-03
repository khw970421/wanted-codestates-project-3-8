import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import promiseMiddlerware from 'redux-promise';
import rootReducer from '../redux/reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk,
) (createStore)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? composeWithDevTools
  : compose;

const store = createStoreWithMiddleware(
  rootReducer,
  composeEnhancers(),
);

export default store;
