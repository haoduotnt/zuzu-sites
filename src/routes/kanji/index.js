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

export default {

  path: '/japanese/kanji/:kIndex',

  async action({ params }) {
    const kIndex = params.kIndex;
    return {
      title: 'React Starter Kit',
      component: <Kanji index={kIndex} />,
    };
  },

};
