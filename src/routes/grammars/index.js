/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Grammars from './Grammars';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import Maintenance from '../../components/Maintenance';

export default {

  path: '/japanese/grammars',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{grammarall{grammars{grammar,hiragana,formated,jlpt}}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    let component = (
      <Maintenance />
    );
    if (data && data.grammarall) {
      component = (
        <Grammars grammar={data.grammarall} />
      );
    }
    return {
      title: 'Japanese Grammar Summary',
      description: 'This summary of some basic Japanese grammar has been derived from the Japanese grammar text books. Let\'s enjoy with these',
      component: <Layout>{component}</Layout>,
    };
  },

};
