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
import s from './Kanji.css';

import KanjiLevel from './KanjiLevel';

class KanjiInfo extends React.Component {
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

  componentWillMount() {
    const { kanji } = this.state;
    if (kanji.kunReading) {
      kanji.kuns = kanji.kunReading.split(',');
    }
    if (kanji.onReading) {
      kanji.ons = kanji.onReading.split(',');
    }
    if (kanji.meaning) {
      kanji.meanings = kanji.meaning.split(',');
    }
    this.setState({
      kanji,
    });
  }

  render() {
    const { kanji } = this.state;
    let kunCompoment;
    if (kanji.kuns) {
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
              {kanji.kuns.map((kun, index) => (
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
    if (kanji.ons) {
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
              {kanji.ons.map((on, index) => (
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

    return (
      <div className={s.kanjiInfo}>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div style={this.styles.wrapper}>
                  <KanjiLevel level={kanji.jlptLevel} text={'JLPT Level'} />
                  <KanjiLevel level={kanji.gradeLevel} text={'Grade Level'} />
                  <KanjiLevel level={kanji.strokeCount} text={'Strokes'} />
                </div>
              </td>
            </tr>
            {kunCompoment}
            {onCompoment}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withStyles(s)(KanjiInfo);
