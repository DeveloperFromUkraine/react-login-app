import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import history from './helpers/history';
import { Header } from './components/header/Header';

import './App.scss';

export function App() {
  return (
    <Fragment>
      <Router history={history}>
        <Header />
        <div className="container">
          hello world
        </div>
      </Router>
    </Fragment>
  );
}

