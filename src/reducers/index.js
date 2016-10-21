import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import token from './token';

export default combineReducers({
  user,
  runtime,
  token,
});
