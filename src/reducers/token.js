import { SET_TOKEN } from '../constants';

export default function runtime(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
