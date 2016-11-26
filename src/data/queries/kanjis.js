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
import KanjisType from '../types/KanjisType';
import { baseURL } from '../../config';

const kanjiInfo = {};

const kanjis = {
  type: KanjisType,
  args: {
    page: { type: new NonNull(IntType) },
  },
  resolve({ request }, { page }) {
    const pageLink = `${baseURL}/kanjis?page=${page}&size=20`;

    fetch(pageLink)
      .then(response => response.json())
      .then(data => {
        /* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/

        if (data._embedded) {
          kanjiInfo.kanjis = data._embedded.kanjis;
        }

        if (data.page) {
          kanjiInfo.page = data.page;
        }
        return kanjiInfo;
      });

    if (kanjiInfo) {
      return kanjiInfo;
    }

    return kanjiInfo;
  },
};

export default kanjis;
