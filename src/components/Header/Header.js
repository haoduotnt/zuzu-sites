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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import FlatButton from 'material-ui/FlatButton';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <Link className={s.brand} to="/">
          <img src={logoUrl} width="38" height="38" alt="React" />
          <span className={s.brandTxt}>JTests</span>
        </Link>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>Japanese test</h1>
          <p className={s.bannerDesc}>Improve your Japanese significantly with our free online practice tests</p>
        </div>
        <h1>Material-UI</h1>
        <h2>example project</h2>
        <FlatButton label="Default" />
        <FlatButton label="Primary" primary={true} />
        <FlatButton label="Secondary" secondary={true} />
        <FlatButton label="Disabled" disabled={true} />
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
