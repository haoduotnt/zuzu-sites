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

import GrammarType from './GrammarType';
import PaginationType from './PaginationType';

const GrammarsType = new ObjectType({
  name: 'Grammars',
  fields: {
    grammars: { type: new List(GrammarType) },
    page: { type: PaginationType },
  },
});

export default GrammarsType;
