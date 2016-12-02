/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from './App';
import Layout from '../../components/Layout';
import Maintenance from '../../components/Maintenance';
import fetch from '../../core/fetch';

export default {

  path: '/download/apk/:appId',

  async action({ params }) {
    const appId = params.appId;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{app(id:"${appId}"){appId,title,summary,icon,developer{devId},developerEmail,developerWebsite,updated,version,screenshots,minInstalls,minInstalls,description,descriptionHTML,androidVersion,androidVersionText,playstoreUrl,contentRating}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (data && data.app) {
      const app = data.app;
      return {
        title: `Download ${app.title} apk`,
        description: app.summary,
        component: <Layout><App app={data.app} /></Layout>,
      };
    }
    return {
      title: 'Download Android apps, Download IPhone apps',
      component: <Layout><Maintenance /></Layout>,
    };
  },

};
