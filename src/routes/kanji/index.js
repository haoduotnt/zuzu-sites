/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Kanji from './Kanji';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import Maintenance from '../../components/Maintenance';

export default {

  path: '/japanese/kanji/:code',

  async action({ params }) {
    const code = params.code;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{kanjimatome(code:${code}){kanji{code,meaning}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    let component = (
      <Maintenance />
    );
    if (data && data.kanjis) {
      component = (
        <Kanji code={code} kanji={data} />
      );
    }
    return {
      title: 'React Starter Kit',
      component: <Layout>{component}</Layout>,
    };
  },

};
