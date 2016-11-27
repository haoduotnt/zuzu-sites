/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

import Promise from 'bluebird';

import fetch from '../../core/fetch';
import KanjiMatomeType from '../types/KanjiMatomeType';
import { baseURL } from '../../config';

const kanjimatome = {
  type: KanjiMatomeType,
  args: {
    code: { type: new NonNull(IntType) },
  },
  async resolve({ request }, { code }) {
    const requestInfo = `${baseURL}/kanjis/${code}`;
    /* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
    const kanji = fetch(requestInfo).then(response => response.json());
    const words = fetch(`${requestInfo}/words`).then(response => response.json()).then(data => data._embedded.words);
    const sentences = fetch(`${requestInfo}/sentences`).then(response => response.json()).then(data => data._embedded.sentences);

    return Promise.props({ // wait for all promises to resolve
      kanji,
      words,
      sentences,
    });
  },
};

export default kanjimatome;
