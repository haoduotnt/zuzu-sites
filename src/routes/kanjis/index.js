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

export default {

  path: '/japanese/kanji',

  async action({ params }) {
    const kIndex = params.kIndex;
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
    if (!data) throw new Error('Failed to load the kanji.');
    return {
      title: 'React Starter Kit',
      component: <Kanjis index={kIndex} kanjis={data.kanjis} />,
    };
  },

};
