import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { createStore } from 'redux'
import store from './redux/store';


import MainApp from './components/MainApp';
//import sessionReducer from './redux/auth/sessionReducer';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);