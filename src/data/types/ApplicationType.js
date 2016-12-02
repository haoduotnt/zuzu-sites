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
  GraphQLBoolean as BooleanType,
  GraphQLList as List,
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
    free: { type: BooleanType },
    developerEmail: { type: StringType },
    developerWebsite: { type: StringType },
    updated: { type: StringType },
    version: { type: StringType },
    minInstalls: { type: IntType },
    maxInstalls: { type: StringType },
    genre: { type: StringType },
    genreId: { type: StringType },
    description: { type: StringType },
    descriptionHTML: { type: StringType },
    histogram: { type: new List(IntType) },
    offersIAP: { type: BooleanType },
    adSupported: { type: BooleanType },
    androidVersionText: { type: StringType },
    androidVersion: { type: StringType },
    contentRating: { type: StringType },
    screenshots: { type: new List(StringType) },
    comments: { type: new List(StringType) },
//    recentChanges:
    preregister: { type: BooleanType },
    playstoreUrl: { type: StringType },
    permissions: { type: StringType },
    similar: { type: StringType },
    reviews: { type: StringType },
  },
});

export default ApplicationType;
