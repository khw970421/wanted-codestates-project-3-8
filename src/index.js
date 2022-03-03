import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root'),
);
