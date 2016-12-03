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
import Subheader from 'material-ui/Subheader';
import s from './Kanji.css';

import KanjiInfo from './KanjiInfo';
import KanjiSentence from './KanjiSentence';
import KanjiWord from './KanjiWord';

class Kanji extends React.Component {
  static propTypes = {
    code: React.PropTypes.number,
    kanji: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      kanji: props.kanji,
      code: props.code,
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

  componentWillMount() {
    const { kanji } = this.state;
    if (kanji.kanji.kunReading) {
      kanji.kanji.kuns = kanji.kanji.kunReading.split(',');
    }
    if (kanji.kanji.onReading) {
      kanji.kanji.ons = kanji.kanji.onReading.split(',');
    }
    if (kanji.kanji.meaning) {
      kanji.kanji.meanings = kanji.kanji.meaning.split(',');
    }
    this.setState({
      kanji,
    });
  }

  render() {
    const { code, kanji } = this.state;
    let meaningCompoment;
    if (kanji.kanji.meanings) {
      const meanings = kanji.kanji.meanings;
      meaningCompoment = (
        <div className={s.kanjiArea}>
          <Subheader style={this.styles.subheader}>意味</Subheader>
          <div style={this.styles.wrapper}>
            {meanings.map((meaning, index) => (
              <Chip
                key={`meaning${index}`}
                style={this.styles.chip}
              >
                {meaning}
              </Chip>
              ))}
          </div>
        </div>
      );
    }

    let koohiiStory1;
    if (kanji.kanji.koohiiStory1) {
      koohiiStory1 = (
        <div className={s.kanjiArea}>
          <div style={this.styles.wrapper}>
            <Chip
              key={'koohiiStory11'}
              backgroundColor={'#B3E5FC'}
              style={this.styles.chip}
            >
              Story 1
            </Chip>
            <Chip
              key={'koohiiStory12'}
              style={this.styles.chip}
            >
              {kanji.kanji.koohiiStory1}
            </Chip>
          </div>
        </div>
      );
    }

    let koohiiStory2;
    if (kanji.kanji.koohiiStory2) {
      koohiiStory2 = (
        <div className={s.kanjiArea}>
          <div style={this.styles.wrapper}>
            <Chip
              key={'koohiiStory21'}
              backgroundColor={'#B3E5FC'}
              style={this.styles.chip}
            >
              Story 2
            </Chip>
            <Chip
              key={'koohiiStory22'}
              style={this.styles.chip}
            >
              {kanji.kanji.koohiiStory2}
            </Chip>
          </div>
        </div>
      );
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.kanjiArea}>
            <div className={s.kanjiCode}>
              <h1 style={{ fontSize: 72 }}><b>{String.fromCharCode(code)}</b></h1>
            </div>
            <KanjiInfo kanji={kanji.kanji} />
          </div>
          {koohiiStory1}
          {koohiiStory2}
          {meaningCompoment}
          <KanjiSentence kanji={kanji} />
          <KanjiWord kanji={kanji} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Kanji);
