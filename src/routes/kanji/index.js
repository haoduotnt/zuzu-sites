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
    let code = params.code;
    if (isNaN(code)) {
      code = code.charCodeAt(0);
    }
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{kanjimatome(code:${code}){kanji{code,meaning,gradeLevel,jlptLevel,kunReading,onReading,kanjiRadicals,frequency,strokeCount,strokePaths,koohiiStory1,koohiiStory2}words{id,word,reading,meaning,jlptLevel}sentences{id,sentence,translation}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (data && data.kanjimatome) {
      let description = `Kanji ${String.fromCharCode(code)}`;
      if (data.kanjimatome.kanji.koohiiStory2) {
        description = `${data.kanjimatome.kanji.jlptLevel ? `N${data.kanjimatome.kanji.jlptLevel}.` : ''} Stroke: ${data.kanjimatome.kanji.strokeCount}. Story 1: ${data.kanjimatome.kanji.koohiiStory2}. Story 2: ${data.kanjimatome.kanji.koohiiStory1}`;
      }
      return {
        title: `Kanji ${String.fromCharCode(data.kanjimatome.kanji.code)}`,
        description,
        component: <Layout><Kanji code={code} kanji={data.kanjimatome} /></Layout>,
      };
    }
    return {
      title: `Kanji ${String.fromCharCode(code)}`,
      description: `Kanji ${String.fromCharCode(code)}`,
      component: <Layout><Maintenance /></Layout>,
    };
  },

};
