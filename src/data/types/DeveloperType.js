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
} from 'graphql';

const DeveloperType = new ObjectType({
  name: 'Developer',
  fields: {
    devId: { type: StringType },
    url: { type: StringType },
  },
});

export default DeveloperType;
