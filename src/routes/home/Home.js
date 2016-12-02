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
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { GridList, GridTile } from 'material-ui/GridList';

import s from './Home.css';

const desktopStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
  image: {
    padding: 20,
  },
};

class Home extends React.Component {
  static propTypes = {
    apps: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  render() {
    const { apps } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div style={desktopStyles.root}>
            <center>
              <h1>Mobile application store</h1>
              <p>Browse and install your favorite applications and games on your phone</p>
            </center>
            <GridList
              cellHeight={250}
              cols={4}
              style={desktopStyles.gridList}
            >
              {apps.map((app) => (
                <GridTile
                  key={app.appId}
                  title={app.title}
                  subtitle={<span>by <b>{app.developer.devId}</b></span>}
                  actionIcon={<IconButton>{app.score}<StarBorder color="white" /></IconButton>}
                >
                  <img style={desktopStyles.image} className="img-circle" src={`${app.icon.startsWith('http') ? app.icon : `http:${app.icon}`}`} alt={`Download ${app.title} apk`} />
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
