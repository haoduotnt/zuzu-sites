/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

import ApplicationType from '../types/ApplicationType';

const app = {
  type: ApplicationType,
  args: {
    id: { type: new NonNull(StringType) },
  },
  async resolve({ request }, { id }, { googleplay }) {
    return googleplay.app.load(id);
  },
};

export default app;
