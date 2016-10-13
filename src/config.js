/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '2134596160098950',
    secret: process.env.FACEBOOK_APP_SECRET || '7e33fa3194b8bde94a6fa1e92d4b2ffc',
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '492545033226-oscl26h1lmomsg25u8fr7ov8m8kjukn9.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'a0hGA1Q-HpmuyUKwtPGx-fsT',
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || '6D8twqwHzjEO017nTOHIEZR1U',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'WBnyLz655Jh8TeUNltpJqkBDYmFyPH5DSgcWNSdqJu9Oboqzdj',
  },

};
