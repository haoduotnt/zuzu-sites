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

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Avatar from 'material-ui/Avatar';

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
        <ListItem
          primaryText={this.props.user.email}
          leftAvatar={<Avatar src={this.props.user.picture} />}
        />
      )
    } else {
      profile = (
        <ListItem
          primaryText="Anonymous"
          leftAvatar={<Avatar src="assets/anonymous.svg" />}
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
          <List>
            <Link to="/"><ListItem primaryText="ホーム" leftIcon={<ActionHome />} /></Link>
            <Subheader>日本語を学ぶ</Subheader>
            <ListItem primaryText="漢字" leftIcon={<ContentInbox />} />
            <ListItem primaryText="文法" leftIcon={<ActionGrade />} />
            <ListItem primaryText="単語" leftIcon={<ContentSend />} />
            <ListItem primaryText="学習" leftIcon={<ContentInbox />} />
          </List>
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
