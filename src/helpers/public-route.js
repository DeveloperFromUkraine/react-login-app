import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PublicRoute = ({component: Component, restricted, ...rest}) => {
  const authed = !!Cookies.get('token');
  return (
    <Route {...rest} render={props => (
      authed && restricted ? <Redirect to='/servers' /> : <Component {...props}/>
    )}/>
  )
};