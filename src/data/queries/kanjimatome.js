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

import KanjiMatomeType from '../types/KanjiMatomeType';

const kanjimatome = {
  type: KanjiMatomeType,
  args: {
    code: { type: new NonNull(IntType) },
  },
  async resolve({ request }, { code }, { loaders }) {
    const kanji = loaders.kanji.load(code);
    const words = loaders.kanji.loadWords(code);
    const sentences = loaders.kanji.loadSentences(code);
    return Promise.props({ // wait for all promises to resolve
      kanji,
      words,
      sentences,
    });
  },
};

export default kanjimatome;
