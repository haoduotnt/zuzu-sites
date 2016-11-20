/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Kanji.css';

class Kanji extends React.Component {
  render() {
    const { code, kanji } = this.props;
    return (
      <Layout>
        <div className={s.root}>
          <div className={s.container}>
            <h1 className={s.title}>Kanji</h1>
            <ul className={s.news}>
              Kanji {String.fromCharCode(code)}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withStyles(s)(Kanji);
