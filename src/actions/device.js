/* eslint-disable import/prefer-default-export */

import { DETECT_DEVICE } from '../constants';

export function detectDevice({ device, userAgent }) {
  return {
    type: DETECT_DEVICE,
    payload: {
      device,
      userAgent,
    },
  };
}
