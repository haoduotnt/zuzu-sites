import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import device from './device';
import grammars from './grammars';

export default combineReducers({
  user,
  runtime,
  device,
  grammars,
});
