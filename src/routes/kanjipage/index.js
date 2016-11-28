/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Kanjis from '../kanjis/Kanjis';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import Maintenance from '../../components/Maintenance';

export default {

  path: '/japanese/kanjis/:page',

  async action({ params }) {
    let page = params.page;
    if (isNaN(page) || page < 1) {
      page = 1;
    }
    page -= 1;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{kanjis(page:${page}){kanjis{code,meaning,gradeLevel,jlptLevel,kunReading,onReading,frequency,strokePaths}page{size,totalPages,totalElements,number}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    let component = (
      <Maintenance />
    );
    if (data && data.kanjis.kanjis) {
      component = (
        <Kanjis kanjis={data.kanjis.kanjis} page={data.kanjis.page} currentPage={page} />
      );
    }
    return {
      title: 'All kanji in japanese',
      component: <Layout>{component}</Layout>,
    };
  },

};
