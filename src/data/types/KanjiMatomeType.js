/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLList as List,
} from 'graphql';

import KanjiType from './KanjiType';
import WordType from './WordType';
import SentenceType from './SentenceType';

const KanjiMatomeType = new ObjectType({
  name: 'KanjiMatome',
  fields: {
    kanji: { type: KanjiType },
    words: { type: new List(WordType) },
    sentences: { type: new List(SentenceType) },
  },
});

export default KanjiMatomeType;
