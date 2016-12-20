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

class KanjiWord extends React.Component {
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
    let wordsCompoment;
    if (kanji.words && kanji.words.length > 0) {
      const words = kanji.words.sort((a, b) => b.jlptLevel - a.jlptLevel);
      wordsCompoment = (
        <div className={s.kanjiArea}>
          <Subheader style={this.styles.subheader}>Words</Subheader>
          {words.length !== 0 && words.map((word) => {
            const regex = /\(\d\)/g;
            const meanings = word.meaning.split(regex);
            return (
              <div key={`word_${word.id}`}>
                <div style={this.styles.wrapper}>
                  <Chip
                    backgroundColor={'#B3E5FC'}
                    style={this.styles.chip}
                  >
                    <Avatar size={32} backgroundColor={'#E91E63'}>
                      ja
                    </Avatar>
                    {word.word}
                  </Chip>
                  <Chip
                    style={this.styles.chip}
                  >
                    {word.reading}
                  </Chip>
                  <Chip
                    backgroundColor={'#FFE082'}
                    style={this.styles.chip}
                  >
                    N{word.jlptLevel}
                  </Chip>
                </div>
                {meanings.map((meaning, index) => (
                  <div key={`${word.id}_${index}`}>
                    {meaning}
                    <br />
                  </div>
                ))}
                <Divider />
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div>{wordsCompoment}</div>
    );
  }
}

export default withStyles(s)(KanjiWord);
