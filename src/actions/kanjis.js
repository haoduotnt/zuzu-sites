/* eslint-disable import/prefer-default-export */

import { GET_KANJIS } from '../constants';

export function getKanjis({ kanjis }) {
  return {
    type: GET_KANJIS,
    payload: {
      kanjis,
    },
  };
}
