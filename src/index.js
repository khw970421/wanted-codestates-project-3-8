import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import reduxThunk from 'redux-thunk';
import promiseMiddlerware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk,
) (createStore)

const store = createStoreWithMiddleware(
  rootReducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
