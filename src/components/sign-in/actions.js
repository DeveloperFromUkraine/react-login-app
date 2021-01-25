import { formFieldsRequired } from './constants';
import { LOGIN_FORM_ERROR, LOGIN_FORM_INVALID, LOGIN_FORM_REQUEST, USER_IS_AUTHORIZED } from '../../constants/actions';
import axios from 'axios';
import Cookies from 'js-cookie'
import { baseUrl } from '../../api/baseUrl';

const formFieldRequiredFields = Object.values(formFieldsRequired);

const getInvalidFields = (fields) => {
  return formFieldRequiredFields.filter(fieldName => fields[fieldName] === '');
};

const signIn = (payload) => (dispatch) => {
  dispatch({type: LOGIN_FORM_REQUEST});

  const {userName, password} = payload;

  axios.post(`${baseUrl.authUrl}`, {username: userName, password})
    .then(({data: {token}}) => {
      Cookies.set('token', token, {expires: 1, sameSite: 'strict', domain: "localhost"});
      dispatch({type: USER_IS_AUTHORIZED});
    })
    .catch(error => dispatch({type: LOGIN_FORM_ERROR, payload: error.response.status}));

}

export const signInFormSubmit = () => (dispatch, getState) => {
  const state = getState();

  const {userName, password} = state.signInForm;

  const invalidFields = getInvalidFields({userName, password});

  if (invalidFields.length === 0) {
    dispatch(signIn({userName, password}));
  } else {
    dispatch({type: LOGIN_FORM_INVALID, payload: invalidFields});
  }
}