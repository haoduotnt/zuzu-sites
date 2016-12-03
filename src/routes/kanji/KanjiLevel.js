/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const styles = {
  chip: {
    margin: 4,
  },
};

class KanjiLevel extends React.Component {
  static propTypes = {
    level: React.PropTypes.number,
    text: React.PropTypes.string,
  }

  render() {
    const { level, text } = this.props;
    return (
      <Chip
        backgroundColor={'#B3E5FC'}
        style={styles.chip}
      >
        <Avatar size={32} backgroundColor={'#E91E63'}>
          {level}
        </Avatar>
        {text}
      </Chip>
    );
  }
}

export default KanjiLevel;
