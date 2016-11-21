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
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import s from './Footer.css';
import Link from '../Link';
import history from '../../core/history';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>
const aboutUsIcon = <FontIcon className="material-icons">supervisor_account</FontIcon>
const messageIcon = <FontIcon className="material-icons">message</FontIcon>
const privacyPolicyIcon = <FontIcon className="material-icons">verified_user</FontIcon>

class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index, link) => {
    //this.setState({ selectedIndex: index });
    history.push(link);
  };

  render() {
    let aboutUs = "About Us";
    let privacyPolicy = "Privacy Policy";
    if (this.props.device.type !== 'desktop') {
      aboutUs = "About's";
      privacyPolicy = "Policy";
    }
    return (
      <Paper zDepth={1}>
        <BottomNavigation>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onTouchTap={() => this.select(0, "/")}
          />
          <BottomNavigationItem
            label={aboutUs}
            icon={aboutUsIcon}
            onTouchTap={() => this.select(1, "/about")}
          />
          <BottomNavigationItem
            label="Contact"
            icon={messageIcon}
            onTouchTap={() => this.select(2, "/contact")}
          />
          <BottomNavigationItem
            label={privacyPolicy}
            icon={privacyPolicyIcon}
            onTouchTap={() => this.select(3, "/privacy")}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    device: state.device.device,
  };
}

export default connect(mapStateToProps)(withStyles(s)(Footer));
