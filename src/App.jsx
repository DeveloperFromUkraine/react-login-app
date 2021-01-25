import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Servers } from './components/servers/Servers';
import { Home } from './components/home/Home';
import { SignIn } from './components/sign-in/Sign-in';
import { PrivateRoute } from './helpers/private-router';

import './App.scss';
import { PublicRoute } from './helpers/public-route';

export function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <PublicRoute component={Home} exact path='/' restricted={true}/>
            <PublicRoute component={SignIn} exact path='/sign-in' restricted={true}/>
            <PrivateRoute exact path='/servers' component={Servers} />
            <Redirect to='/'/>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

