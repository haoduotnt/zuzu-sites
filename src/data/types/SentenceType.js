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
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const SentenceType = new ObjectType({
  name: 'Sentence',
  fields: {
    id: { type: new NonNull(IntType) },
    sentence: { type: StringType },
    translation: { type: StringType },
    kanjiTransliteration: { type: StringType },
    kanaTransliteration: { type: StringType },
  },
});

export default SentenceType;
