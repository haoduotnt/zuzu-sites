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
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Avatar from 'material-ui/Avatar';

import profileUrl from './anonymous.svg';

const OptionMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

OptionMenu.muiName = 'IconMenu';

const LoginMenu = (props) => (
  <Link to="/login"><FlatButton {...props} label="Login" /></Link>
);

LoginMenu.muiName = 'FlatButton';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    var profile;
    if (this.props.user) {
      profile = (
        <MenuItem
          onTouchTap={this.handleClose}
          primaryText={this.props.user.email}
          leftIcon={<Avatar src={this.props.user.picture} />}
        />
      )
    } else {
      profile = (
        <MenuItem
          onTouchTap={this.handleClose}
          primaryText="Anonymous"
          leftIcon={<Avatar src={profileUrl} />}
        />
      )
    }
    return (
      <div>
        <AppBar
          title="Japanese quiz"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={this.props.user ? <OptionMenu /> : <LoginMenu />}
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          {profile}
          <Divider />
          <Link to="/"><MenuItem onTouchTap={this.handleClose} primaryText="ホーム" leftIcon={<ActionHome />} /></Link>
          <Divider />
          <Subheader>日本語を学ぶ</Subheader>
          <Link to="/japanese/kanji"><MenuItem onTouchTap={this.handleClose} primaryText="漢字" leftIcon={<ContentInbox />} /></Link>
          <Link to="/japanese/grammar"><MenuItem onTouchTap={this.handleClose} primaryText="文法" leftIcon={<ActionGrade />} /></Link>
          <Link to="/japanese/word"><MenuItem onTouchTap={this.handleClose} primaryText="単語" leftIcon={<ContentSend />} /></Link>
          <Link to="/japanese/study"><MenuItem onTouchTap={this.handleClose} primaryText="学習" leftIcon={<ContentInbox />} /></Link>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(withStyles(s)(Header));
