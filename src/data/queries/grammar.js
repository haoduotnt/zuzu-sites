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

import GrammarType from '../types/GrammarType';

const Grammarmatome = {
  type: GrammarType,
  args: {
    code: { type: new NonNull(IntType) },
  },
  async resolve({ request }, { code }, { loaders }) {
    return loaders.grammar.load(code);
  },
};

export default Grammarmatome;
