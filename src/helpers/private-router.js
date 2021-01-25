import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PrivateRoute = ({component: Component, ...rest}) => {
  const authed = !!Cookies.get('token');
  return (
    <Route {...rest} render={props => authed ? <Component {...props} /> : <Redirect to="/sign-in" />} />
  )
};