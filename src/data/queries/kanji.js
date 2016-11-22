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

import fetch from '../../core/fetch';
import KanjiType from '../types/KanjiType';

const url = 'http://localhost:9000/api/v1/kanjis';

let item;
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const kanji = {
  type: KanjiType,
  args: {
    code: { type: new NonNull(IntType) },
  },
  async resolve({ request }, { code }) {
    if (lastFetchTask) {
      return lastFetchTask;
    }
    const requestLink = `${url}/${code}`;
    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(requestLink, {
        method: 'GET',
        headers: {
          'X-Clacks-Overhead': 'http://jtests.com',
          'X-Parse-Application-Id': 'xxx',
          'X-Parse-REST-API-Key': 'xxx',
        },
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            item = data;
          }
          return item;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (item) {
        return item;
      }

      return lastFetchTask;
    }

    return item;
  },
};

export default kanji;
