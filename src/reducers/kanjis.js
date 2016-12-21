import { GET_KANJIS } from '../constants';

export default function index(state = {}, action) {
  switch (action.type) {
    case GET_KANJIS:
      return {
        ...state,
        kanjis: action.payload.kanjis,
      };
    default:
      return state;
  }
}
