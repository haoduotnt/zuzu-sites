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
import Maintenance from '../../components/Maintenance';

export default {

  path: '/japanese/kanjis',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{kanjis(page:0){kanjis{code,meaning,gradeLevel,jlptLevel,kunReading,onReading,frequency,strokePaths}page{size,totalPages,totalElements,number}}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    let component = (
      <Maintenance />
    );
    if (data && data.kanjis.kanjis) {
      component = (
        <Kanjis kanjis={data.kanjis.kanjis} page={data.kanjis.page} />
      );
    }
    return {
      title: 'All kanji in japanese',
      description: 'More than 6000+ kanji in Japanese. Let\'s learn and master about kanji',
      component: <Layout type="kanji">{component}</Layout>,
    };
  },

};
