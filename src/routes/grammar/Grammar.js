/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { parseString } from 'xml2js';
import htmlparser from 'htmlparser2';
import s from './Grammar.css';

/* eslint func-names: ["error", "always"]*/



class Grammar extends React.Component {
  static propTypes = {
    grammar: React.PropTypes.object,
  }

  render() {
    const xml = this.props.grammar.formated;
    const parser = new htmlparser.Parser({
      onopentag(name) {
        console.log('Open tag:', name);
      },
      ontext(text) {
        console.log('-->', text);
      },
      onclosetag(name) {
        console.log('Close tag: ', name);
      },
    }, { decodeEntities: true });
    parser.write(xml);
    parser.end();

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.grammar.formated}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Grammar);
