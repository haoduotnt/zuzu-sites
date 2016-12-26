/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Grammar from './Grammar';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/japanese/grammar/:id',

  async action({ params }) {
    const id = params.id;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{content(path:"/japanese/grammar/${id}"){path,title,content,description,component}}`,
      }),
      credentials: 'include',
    });
    if (resp.status !== 200) throw new Error(resp.statusText);
    const { data } = await resp.json();
    if (!data || !data.content) return undefined;
    return {
      title: data.content.title,
      description: data.content.description,
      component: <Layout><Grammar {...data.content} /></Layout>,
    };
  },

};
