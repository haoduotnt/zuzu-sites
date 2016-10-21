/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setToken } from '../../actions/token';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends Component {
  componentDidMount() {
    console.log(">>>>>>>>>>>>" + this.props.token);
    this.props.dispatch(
      setToken('new token from navigation')
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forPerson !== this.props.forPerson) {
      console.log(">>>>>>>>>>>>" + this.props.token);
    }
  }

  render() {
    this.props.dispatch(
      setToken('new token from navigation')
    );

    console.log(">>>>>>>>>>>>" + this.props.token);
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <Link className={s.link} to="/login">Log in</Link>
      </div>
    );
  }
}

Navigation.propTypes = {
  className: PropTypes.string,
  token: PropTypes.string,
};

function mapStateToProps(state) {
  console.log(state)
  return {
    token: state.token.token,
  };
}

export default connect(mapStateToProps)(withStyles(s)(Navigation));
