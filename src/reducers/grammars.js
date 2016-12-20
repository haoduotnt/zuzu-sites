import { GET_GRAMMARS } from '../constants';

export default function index(state = {}, action) {
  switch (action.type) {
    case GET_GRAMMARS:
      return {
        ...state,
        grammars: action.payload.grammars,
      };
    default:
      return state;
  }
}
