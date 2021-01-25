import { combineReducers } from 'redux';
import { signInPageReducer } from '../components/sign-in/reducer';
import { serversReducer } from '../components/servers/reducer';

export function createRootReducer() {
  return combineReducers({
    signInForm: signInPageReducer,
    serversReducer
  });
}