import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import { App } from './App';
import configureStore from './store/store';
import reportWebVitals from './reportWebVitals';

const store = configureStore();
const target = document.getElementById('root');

const renderApp = () => {
  render(
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>,
    target
  )
};
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
