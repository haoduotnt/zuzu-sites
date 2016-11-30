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
} from 'graphql';

import DeveloperType from './DeveloperType';

const ApplicationType = new ObjectType({
  name: 'Application',
  fields: {
    appId: { type: StringType },
    url: { type: StringType },
    title: { type: StringType },
    summary: { type: StringType },
    developer: { type: DeveloperType },
    icon: { type: StringType },
    score: { type: IntType },
    price: { type: IntType },
    playstoreUrl: { type: StringType },
    permissions: { type: StringType },
    similar: { type: StringType },
    reviews: { type: StringType },
  },
});

export default ApplicationType;
