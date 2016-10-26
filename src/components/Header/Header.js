/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    let header;
    if (this.props.device.type === 'desktop') {
      header = (
        <HeaderDesktop />
      )
    } else {
      header = (
        <HeaderMobile />
      )
    }
    return (
      <div>
        <AppBar
          title="Japanese quiz"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

class HeaderDesktop extends Component {
  render() {
    return (
      <div className={s.container}>
        <Navigation className={s.nav} />
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>Japanese quiz</h1>
          <p className={s.bannerDesc}>Improve your Japanese significantly with our free online practice tests</p>
        </div>
      </div>
    );
  }
}

class HeaderMobile extends Component {
  render() {
    return (
      <div className={s.container}>
        <Navigation className={s.nav} />
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>Japanese quiz</h1>
          <p className={s.bannerDesc}>Improve your Japanese significantly with our free online practice tests</p>
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

export default connect(mapStateToProps)(withStyles(s)(Header));
