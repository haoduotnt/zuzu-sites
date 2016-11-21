/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import KanjiType from '../types/KanjiType';

const url = 'http://localhost:9000/api/v1/kanjis';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const kanjis = {
  type: new List(KanjiType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url, {
        method: 'GET',
        headers: {
          'X-Clacks-Overhead': 'http://jtests.com',
          'X-Parse-Application-Id': 'xxx',
          'X-Parse-REST-API-Key': 'xxx',
        },
      })
        .then(response => response.json())
        .then(data => {
          /* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/

          if (data._embedded) {
            items = data._embedded.kanjis;
          }

          return items;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default kanjis;
