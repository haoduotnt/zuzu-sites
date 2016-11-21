/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Kanjis from './Kanjis';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import NotFound from '../notFound/NotFound';

export default {

  path: '/japanese/kanji',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{kanjis{code,meaning}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (!data) {
      return {
        title: '',
        component: <Layout><NotFound /></Layout>,
      };
    }
    return {
      title: 'React Starter Kit',
      component: <Layout><Kanjis kanjis={data.kanjis} /></Layout>,
    };
  },

};
