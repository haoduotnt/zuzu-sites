/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Jlpt from './Jlpt';

export default {

  path: '/japanese/jlpt/:category/:jlptLevel',

  async action({ params }) {
    const category = params.category;
    const jlptLevel = params.jlptLevel;
    return {
      title: 'React Starter Kit',
      component: <Jlpt level={jlptLevel} category={category} />,
    };
  },

};
