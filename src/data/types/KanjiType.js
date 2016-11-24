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
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const KanjiType = new ObjectType({
  name: 'Kanji',
  fields: {
    code: { type: new NonNull(StringType) },
    jlptLevel: { type: IntType },
    gradeLevel: { type: IntType },
    kunReading: { type: StringType },
    onReading: { type: StringType },
    meaning: { type: StringType },
    frequency: { type: IntType },
    strokePaths: { type: StringType },
  },
});

export default KanjiType;
