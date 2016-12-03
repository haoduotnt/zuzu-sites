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
import Paper from 'material-ui/Paper';
import s from './Kanji.css';

class Kanji extends React.Component {
  static propTypes = {
    code: React.PropTypes.string,
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
    let kunCompoment;
    if (kanji.kanji.kuns) {
      const kuns = kanji.kanji.kuns;
      kunCompoment = (
        <tr>
          <td>
            <div style={this.styles.wrapper}>
              <Chip
                key={'kunindex'}
                backgroundColor={'#B3E5FC'}
                style={this.styles.chip}
              >
                訓
              </Chip>
              {kuns.map((kun, index) => (
                <Chip
                  key={`kun_${index}`}
                  style={this.styles.chip}
                >
                  {kun}
                </Chip>
              ))}
            </div>
          </td>
        </tr>
      );
    }

    let onCompoment;
    if (kanji.kanji.ons) {
      const ons = kanji.kanji.ons;
      onCompoment = (
        <tr>
          <td>
            <div style={this.styles.wrapper}>
              <Chip
                key={'onindex'}
                backgroundColor={'#B3E5FC'}
                style={this.styles.chip}
              >
                音
              </Chip>
              {ons.map((on, index) => (
                <Chip
                  key={`on${index}`}
                  style={this.styles.chip}
                >
                  {on}
                </Chip>
              ))}
            </div>
          </td>
        </tr>
      );
    }

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

    let sentencesCompoment;
    if (kanji.sentences) {
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

    let wordsCompoment;
    if (kanji.words) {
      wordsCompoment = (
        <div className={s.kanjiArea}>
          <Subheader style={this.styles.subheader}>Words</Subheader>
          {kanji.words.length !== 0 && kanji.words.map((word) => (
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
              </div>
              {word.meaning}
              <Divider />
            </div>
          ))}
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
            <div className={s.kanjiInfo}>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <div style={this.styles.wrapper}>
                        <Chip
                          backgroundColor={'#B3E5FC'}
                          style={this.styles.chip}
                        >
                          <Avatar size={32} backgroundColor={'#E91E63'}>
                            {kanji.kanji.jlptLevel}
                          </Avatar>
                          JLPT Level
                        </Chip>
                        <Chip
                          backgroundColor={'#B3E5FC'}
                          style={this.styles.chip}
                        >
                          <Avatar size={32} backgroundColor={'#E91E63'}>
                            {kanji.kanji.gradeLevel}
                          </Avatar>
                          Grade Level
                        </Chip>
                        <Chip
                          backgroundColor={'#B3E5FC'}
                          style={this.styles.chip}
                        >
                          <Avatar size={32} backgroundColor={'#E91E63'}>
                            {kanji.kanji.strokeCount}
                          </Avatar>
                          Strokes
                        </Chip>
                      </div>
                    </td>
                  </tr>
                  {kunCompoment}
                  {onCompoment}
                </tbody>
              </table>
            </div>
          </div>
          {meaningCompoment}
          {sentencesCompoment}
          {wordsCompoment}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Kanji);
