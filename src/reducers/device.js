import { DETECT_DEVICE } from '../constants';

export default function runtime(state = {}, action) {
  switch (action.type) {
    case DETECT_DEVICE:
      return {
        ...state,
        device: action.payload.device,
        userAgent: action.payload.userAgent,
      };
    default:
      return state;
  }
}
