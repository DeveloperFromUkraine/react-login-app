import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signInFormSubmit } from './actions';
import { getErrorName } from './utils';
import { LOGIN_FORM_CHANGE, LOGIN_FORM_UNMOUNT } from '../../constants/actions';
import { formFieldsRequired } from './constants';

import './Sign-in.scss';

const SignIn = () => {

  const dispatch = useDispatch();
  const userNameError = useSelector(({signInForm}) => signInForm[getErrorName(formFieldsRequired.userName)]);
  const passwordError = useSelector(({signInForm}) => signInForm[getErrorName(formFieldsRequired.password)]);
  const isAuth = useSelector(({signInForm: {isAuth}}) => isAuth);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signInFormSubmit());
  }

  const handleChange = e => {
    const {name, value} = e.target;
    dispatch({type: LOGIN_FORM_CHANGE, payload: {name, value}})
  }

  useEffect(() => {
    if(isAuth) {
      history.push('/');
    }
    return () => {
      dispatch({type: LOGIN_FORM_UNMOUNT});
    };
  }, [dispatch, history, isAuth]);

  return (
    <div className="sign-in-form-container">
      <form onSubmit={handleSubmit} onChange={handleChange} className="sign-in-form" noValidate>
        <div className="sign-in-form-input-wrapper">
          <label htmlFor={formFieldsRequired.userName}
                 className="sign-in-form-input-label">
            USER NAME
          </label>
          <input type="text"
                 name={formFieldsRequired.userName}
                 className={`sig-in-form-input ${userNameError && 'error'}`}
                 placeholder="Enter your name"
                 noValidate/>
          {userNameError && (
            <span className="sign-in-form-input-error-message">{userNameError}</span>
          )}
        </div>
        <div className="sign-in-form-input-wrapper">
          <label htmlFor={formFieldsRequired.password}
                 className="sign-in-form-input-label">
            PASSWORD
          </label>
          <input type="password"
                 name={formFieldsRequired.password}
                 className={`sig-in-form-input ${passwordError && 'error'}`}
                 placeholder="Enter your password"
                 noValidate/>
          {passwordError && (
            <span className="sign-in-form-input-error-message">{passwordError}</span>
          )}
        </div>
        <div>
          <button className="sing-in-form-button" type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export { SignIn };
