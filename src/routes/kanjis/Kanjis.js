/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import FlatButton from 'material-ui/FlatButton';

import Pagination from 'react-paginate';

import history from '../../core/history';
import s from './Kanjis.css';
import KanjiDesktop from './KanjiDesktop';
import KanjiMobile from './KanjiMobile';

class Kanjis extends React.Component {
  static propTypes = {
    kanjis: React.PropTypes.arrayOf(React.PropTypes.object),
    page: React.PropTypes.object,
    device: React.PropTypes.object,
  }

  handlePageClick = (data) => {
    history.push(`/japanese/kanjis/${data.selected + 1}`);
  };

  render() {
    let layout;
    const { kanjis, page } = this.props;
    if (kanjis === null || kanjis.length === 0) {
      layout = (
        <center><FlatButton label="Server under maintaince." secondary /></center>
      );
    } else {
      layout = (
        <KanjiDesktop kanjis={kanjis} />
      );
      if (this.props.device.type !== 'desktop') {
        layout = (
          <KanjiMobile kanjis={kanjis} />
        );
      }
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Pagination
            previousLabel={'«'}
            nextLabel={'»'}
            breakLabel={<a href="">...</a>}
            breakClassName={'break-me'}
            pageNum={page.size}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            clickCallback={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
          {layout}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    device: state.device.device,
  };
}

export default connect(mapStateToProps)(withStyles(s)(Kanjis));
