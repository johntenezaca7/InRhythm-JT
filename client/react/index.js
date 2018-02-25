import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './Components/App';
import reducers from './reducers';

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <App />
  </Provider>
  , document.getElementById('albums-container'));