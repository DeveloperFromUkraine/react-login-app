import { formFieldsRequired } from './constants';
import { getErrorName } from './utils';
import {
  LOGIN_FORM_CHANGE,
  LOGIN_FORM_ERROR,
  LOGIN_FORM_INVALID,
  LOGIN_FORM_REQUEST,
  LOGIN_FORM_UNMOUNT, USER_IS_AUTHORIZED
} from '../../constants/actions';

const initialState = {
  [formFieldsRequired.userName]: '',
  [formFieldsRequired.password]: '',
  [getErrorName(formFieldsRequired.userName)]: '',
  [getErrorName(formFieldsRequired.password)]: '',
  isLoading: false,
  isAuth: false,
};

export const signInPageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_FORM_CHANGE: {
      const {name, value} = action.payload;

      return {
        ...state,
        [name]: value.trim(),
        [getErrorName(name)]: ''
      }
    }
    case LOGIN_FORM_UNMOUNT:
      return initialState
    case LOGIN_FORM_INVALID: {
      const invalidFields = action.payload;
      const newState = {...state};

      invalidFields.forEach(invalidFieldsName => {
        newState[getErrorName(invalidFieldsName)] = 'This field is required';
      });

      return newState;
    }
    case LOGIN_FORM_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case LOGIN_FORM_ERROR: {
      const newState = {
        ...state,
        isLoading: false
      }
      if(action.payload === 400) newState[getErrorName(formFieldsRequired.password)] = 'Incorrect password';
      if(action.payload === 401) {
        newState[getErrorName(formFieldsRequired.userName)] = 'Incorrect User Name';
        newState[getErrorName(formFieldsRequired.password)] = 'Incorrect Password';
      }

      return newState;
    }
    case USER_IS_AUTHORIZED: {
      return {
        ...state,
        isAuth: true
      }
    }
    default:
      return state;
  }
}
