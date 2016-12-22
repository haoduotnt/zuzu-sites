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
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import SearchIcon from 'material-ui/svg-icons/action/search';
import s from './SearchBar.css';

const styles = {
  autocomplete: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    backgroundColor: "#00bcd4",
    boxShadow: "none",
  },
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        kanjiDataSource: [],
        grammarDataSource: [],
      };
  }

  componentWillMount() {
    if (this.props.type === "kanji") {
      let kanjiDataSource = [];
      this.props.kanjis.map((item, index) => {
        const kanji = String.fromCharCode(item.code);
        kanjiDataSource.push({
            text: kanji,
            value: (
              <MenuItem
                primaryText={kanji}
                secondaryText={item.meaning}
                secondaryTextLines={2}
              />)
          });
      })
      this.setState({kanjiDataSource: kanjiDataSource});
    } else if (this.props.type === "grammar") {
      let grammarDataSource = [];
      this.props.grammars.map((item, index) => {
        grammarDataSource.push({
            text: item.hiragana,
            value: (<MenuItem primaryText={item.grammar} secondaryText="&#9786;"/>)
          });
      });
      this.setState({grammarDataSource: grammarDataSource});
    }
  }

  kanjiFilter = (searchText, key) => {
    for (let index = 0; index < searchText.length; index++) {
      if (searchText[index] === key) {
        return true;
      }
    }

    return false;
  };

  render() {
    let autocomplete;
    if (this.props.type === "kanji") {
      autocomplete = (
        <AutoComplete
          style={styles.autocomplete}
          textFieldStyle={styles.textfield}
          filter={this.kanjiFilter}
          dataSource={this.state.kanjiDataSource}
          maxSearchResults={5}
          fullWidth
        />
      );
    } else if (this.props.type === "grammar") {
      autocomplete = (
        <AutoComplete
          style={styles.autocomplete}
          textFieldStyle={styles.textfield}
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.grammarDataSource}
          maxSearchResults={5}
          fullWidth
        />
      )
    }
    return (
      <div className={s.searchbar}>
        <SearchIcon color={"white"} hoverColor={"green"}/>
        {autocomplete}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    device: state.device.device,
    grammars: state.grammars.grammars,
    kanjis: state.kanjis.kanjis,
  };
}

export default connect(mapStateToProps)(withStyles(s)(SearchBar));
