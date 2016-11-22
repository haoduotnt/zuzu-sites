/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import async from 'async';
import {
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

import fetch from '../../core/fetch';
import KanjiMatomeType from '../types/KanjiMatomeType';

const headers = {
  method: 'GET',
  headers: {
    'X-Clacks-Overhead': 'http://jtests.com',
    'X-Parse-Application-Id': 'xxx',
    'X-Parse-REST-API-Key': 'xxx',
  },
};

let item;
const kanjimatome = {
  type: KanjiMatomeType,
  args: {
    code: { type: new NonNull(IntType) },
  },
  resolve({ request }, { code }) {
    const requestInfo = `http://127.0.0.1:9000/api/v1/kanjis/${code}`;
    /* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
    async.parallel({
      kanji(callback) {
        fetch(requestInfo, headers)
         .then(response => response.json())
         .then(data => {
           callback(null, data);
         })
         .catch((err) => {
           callback(err);
         });
      },
      words(callback) {
        fetch(`${requestInfo}/words`, headers)
         .then(response => response.json())
         .then(data => {
           callback(null, data._embedded.words);
         })
         .catch((err) => {
           callback(err);
         });
      },
      sentences(callback) {
        fetch(`${requestInfo}/sentences`, headers)
         .then(response => response.json())
         .then(data => {
           callback(null, data._embedded.sentences);
         })
         .catch((err) => {
           callback(err);
         });
      },
    }, (err, results) => {
      if (err) {
        return null;
      }
      item = results;
      return item;
       // results is now equals to: {info: 'abc\n', words: 'xyz\n', ...}
    });
    if (item) {
      return item;
    }
    return {};
  },
};

export default kanjimatome;
