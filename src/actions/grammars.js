/* eslint-disable import/prefer-default-export */

import { GET_GRAMMARS } from '../constants';

export function getGrammars({ grammars }) {
  return {
    type: GET_GRAMMARS,
    payload: {
      grammars,
    },
  };
}
