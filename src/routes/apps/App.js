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
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import s from './App.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

class Home extends React.Component {
  static propTypes = {
    app: React.PropTypes.object,
  }

  render() {
    const { app } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{app.title}</h1>
          <p>{app.summary}</p>
          <img
            className="img-circle"
            src={`${app.icon.startsWith('http') ? app.icon : `http:${app.icon}`}`}
            alt={`Download ${app.title} apk`}
          />

          <div style={styles.root}>
            <GridList
              cellHeight={320}
              style={styles.gridList}
              cols={2.2}
            >
              {app.screenshots.map((screenshot, index) => (
                <GridTile
                  cellHeight={250}
                  key={`${app.appId}_${index}`}
                  title={app.title}
                  actionIcon={<IconButton>${app.score} <StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img
                    src={screenshot}
                    alt={`Download ${app.title} apk`}
                  />
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
