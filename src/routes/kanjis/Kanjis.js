/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Kanjis.css';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class Kanjis extends React.Component {
  render() {
    const { kanjis } = this.props;
    let layout = (
      <KanjiDesktop kanjis={kanjis} />
    )
    if (this.props.device.type !== 'desktop') {
      layout = (
        <KanjiMobile kanjis={kanjis} />
      )
    }
    return (
      <Layout>
        <div className={s.root}>
          <div className={s.container}>
            {layout}
          </div>
        </div>
      </Layout>
    );
  }
}

const desktopStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};

class KanjiDesktop extends React.Component {
  render() {
    const { kanjis } = this.props;
    return (
      <div style={desktopStyles.root}>
        <GridList
          cellHeight={180}
          cols={4}
          style={desktopStyles.gridList}
        >
          {kanjis.map((kanji) => (
            <GridTile
              key={kanji.code}
              title={<span><b>{kanji.meaning}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <center><h1 style={{fontSize: 48}}>{String.fromCharCode(kanji.code)}</h1></center>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

const mobileStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class KanjiMobile extends React.Component {
  render() {
    const { kanjis } = this.props;
    return (
      <div style={mobileStyles.root}>
        <GridList
          cellHeight={180}
          cols={2}
          style={mobileStyles.gridList}
        >
          {kanjis.map((kanji) => (
            <GridTile
              key={kanji.code}
              title={<span><b>{kanji.meaning}</b></span>}
            >
              <center><h1 style={{fontSize: 48}}>{String.fromCharCode(kanji.code)}</h1></center>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

class KanjiObject extends React.Component {
  render() {
    const { kanji } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>Kanji</h1>
          <ul className={s.news}>
            Kanji {String.fromCharCode(kanji.code)}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    device: state.device.device,
    userAgent: state.device.userAgent,
  };
}

export default connect(mapStateToProps)(withStyles(s)(Kanjis));
