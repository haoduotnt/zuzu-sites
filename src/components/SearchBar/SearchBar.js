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

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

const dataSource = [
  {
    text: '日',
    value: (
      <MenuItem
        primaryText="日"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: '本',
    value: (
      <MenuItem
        primaryText="本"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: '語',
    value: (
      <MenuItem
        primaryText="語"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: '日本',
    value: (
      <MenuItem
        primaryText="日本"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: '日本語',
    value: (
      <MenuItem
        primaryText="日本語"
        secondaryText="&#9786;"
      />
    ),
  },
];

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

  kanjiFilter = (searchText, key) => {
    for (let index = 0; index < searchText.length; index++) {
      if (searchText[index] === key) {
        return true;
      }
    }

    return false;
  };

  render() {
    return (
      <div className={s.searchbar}>
        <SearchIcon color={"white"} hoverColor={"green"}/>
        <AutoComplete
          style={styles.autocomplete}
          textFieldStyle={styles.textfield}
          filter={this.kanjiFilter}
          dataSource={dataSource}
          maxSearchResults={5}
          fullWidth
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    device: state.device.device,
  };
}

export default connect(mapStateToProps)(withStyles(s)(SearchBar));
