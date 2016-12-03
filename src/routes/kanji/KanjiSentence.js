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
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import s from './Kanji.css';

class KanjiSentence extends React.Component {
  static propTypes = {
    kanji: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      kanji: props.kanji,
    };
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      subheader: {
        color: 'while',
        backgroundColor: '#B3E5FC',
        lineHeight: '40px',
        marginTop: '5px',
        marginBottom: '5px',
      },
    };
  }

  render() {
    const { kanji } = this.state;
    let sentencesCompoment;
    if (kanji.sentences && kanji.sentences.length > 0) {
      sentencesCompoment = (
        <div className={s.kanjiArea}>
          <Subheader style={this.styles.subheader}>Sentences</Subheader>
          {kanji.sentences !== 0 && kanji.sentences.map((sentence) => (
            <div key={`sentence_${sentence.id}`}>
              <Chip
                backgroundColor={'#B3E5FC'}
                style={this.styles.chip}
              >
                <Avatar size={32} backgroundColor={'#E91E63'}>
                  ja
                </Avatar>
                {sentence.sentence}
              </Chip>
              <Chip
                style={this.styles.chip}
              >
                <Avatar size={32} backgroundColor={'#4CAF50'}>
                  en
                </Avatar>
                {sentence.translation}
              </Chip>
              <Divider />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div>{sentencesCompoment}</div>
    );
  }
}

export default withStyles(s)(KanjiSentence);
