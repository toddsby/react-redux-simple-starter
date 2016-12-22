import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store';
import { Provider } from 'react-redux';
import Home from './modules/home/home.index';
import { syncHistoryWithStore } from 'react-router-redux';

const initialState = {};
const store = configureStore( initialState );
const history = syncHistoryWithStore( browserHistory, store );

render(
  <Provider store={ store }>
      <Router history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('app')
);