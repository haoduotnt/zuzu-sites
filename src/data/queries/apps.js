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
  GraphQLList as List,
} from 'graphql';

import ApplicationType from '../types/ApplicationType';

const apps = {
  type: new List(ApplicationType),
  args: {
    page: { type: new NonNull(IntType) },
  },
  async resolve({ request }, { page }, { googleplay }) {
    return googleplay.app.load(page);
  },
};

export default apps;
