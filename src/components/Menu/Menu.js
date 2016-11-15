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
import Link from '../Link';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Avatar from 'material-ui/Avatar';

class Menu extends Component {
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
        {profile}
        <List>
          <Link to="/"><ListItem primaryText="ホーム" leftIcon={<ActionHome />} /></Link>
          <Subheader>日本語を学ぶ</Subheader>
          <ListItem primaryText="漢字" leftIcon={<ContentInbox />} />
          <ListItem primaryText="文法" leftIcon={<ActionGrade />} />
          <ListItem primaryText="単語" leftIcon={<ContentSend />} />
          <ListItem primaryText="学習" leftIcon={<ContentInbox />} />
        </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Menu);
