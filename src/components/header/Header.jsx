import React from 'react';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

import Logo from '../../img/nordpass.svg';

import './Header.scss';

const Header = () => {

  const location = useLocation();
  const history = useHistory();
  const isSignInHidden = location.pathname === '/sign-in';
  const authed = !!Cookies.get('token');

  const handleClickLogOut = (e) => {
    e.preventDefault();
    Cookies.remove('token');
    history.push('/');
  }

  const handleNavigateToHomePage = (e) => {
    e.preventDefault();
    if(!authed) history.push('/')
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-content-wrapper">
          <div className="header-logo-wrapper">
            <div onClick={handleNavigateToHomePage} className='cursor-pointer'>
              <img className="header-logo" src={Logo} alt="nord-test"/>
            </div>
          </div>
          <div className="btn-wrapper">
            {authed ? <button className='btn' type="button" onClick={handleClickLogOut}>
                Log Out
              </button> :
              <NavLink to={'/sign-in'} className={`btn ${isSignInHidden && 'invisible'}`}>
                Sign In
              </NavLink>}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header };
