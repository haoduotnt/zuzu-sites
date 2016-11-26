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
} from 'graphql';

const PaginationType = new ObjectType({
  name: 'Pagination',
  fields: {
    size: { type: IntType },
    totalElements: { type: IntType },
    totalPages: { type: IntType },
    number: { type: IntType },
  },
});

export default PaginationType;
