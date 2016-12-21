import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import device from './device';
import grammars from './grammars';
import kanjis from './kanjis';

export default combineReducers({
  user,
  runtime,
  device,
  grammars,
  kanjis,
});
