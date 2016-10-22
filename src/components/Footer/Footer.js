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
import s from './Footer.css';
import Link from '../Link';

class Footer extends Component {
  render() {
    let footer;
    if (this.props.device.type === 'desktop') {
      footer = (
        <FooterDesktop />
      )
    } else {
      footer = (
        <FooterMobile />
      )
    }
    return (
      <div className={s.root}>{footer}</div>
    );
  }
}

class FooterDesktop extends Component {
  render() {
    return (
      <div className={s.container}>
        <span className={s.text}>© Your Company</span>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/">Home</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/about">About us</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/contact">Contact</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/privacy">Privacy Policy</Link>
      </div>
    );
  }
}

class FooterMobile extends Component {
  render() {
    return (
      <div className={s.containerMobile}>
        <span className={s.text}>© Your Company</span>
        <br/>
        <Link className={s.link} to="/">Home</Link>
        <br/>
        <Link className={s.link} to="/about">About us</Link>
        <br/>
        <Link className={s.link} to="/contact">Contact</Link>
        <br/>
        <Link className={s.link} to="/privacy">Privacy Policy</Link>
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

export default connect(mapStateToProps)(withStyles(s)(Footer));
