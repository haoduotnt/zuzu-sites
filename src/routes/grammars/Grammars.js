/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Autosuggest from 'react-autosuggest';
import s from './Grammars.css';
import Link from '../../components/Link';

const people = [
  {
    first: 'Charlie',
    last: 'Brown',
    twitter: 'dancounsell',
  },
  {
    first: 'Charlotte',
    last: 'White',
    twitter: 'mtnmissy',
  },
  {
    first: 'Chloe',
    last: 'Jones',
    twitter: 'ladylexy',
  },
  {
    first: 'Cooper',
    last: 'King',
    twitter: 'steveodom',
  },
];

const theme = {
  container: s.container,
  containerOpen: s.containerOpen,
  input: s.input,
  suggestionsContainer: s.suggestionsContainer,
  suggestionsList: s.suggestionsList,
  suggestion: s.suggestion,
  suggestionFocused: s.suggestionFocused,
  sectionContainer: 'react-autosuggest__section-container',
  sectionTitle: 'react-autosuggest__section-title',
};

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters
const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(`^${escapedValue}`, 'i');

  return people.filter(person => regex.test(`${person.first} ${person.last}`));
};

const getSuggestionValue = suggestion => `${suggestion.first} ${suggestion.last}`;

const renderSuggestion = suggestion => (
  <span className={`${s.suggestionContent} ${s.dancounsell}`}>{`${suggestion.first} ${suggestion.last}`}</span>
);

class Grammars extends React.Component {
  static propTypes = {
    grammars: PropTypes.arrayOf(PropTypes.object),
  };

  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };


  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type \'c\'',
      value,
      onChange: this.onChange,
    };

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>React.js News</h1>
          <Autosuggest // eslint-disable-line react/jsx-no-undef
            theme={theme}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          <ul className={s.news}>
            {this.props.grammars.map((item, index) => (
              <li key={index} className={s.newsItem}>
                <Link className={s.newsTitle} to={`/japanese/grammar/${item.id}`}>{item.id} {item.grammar}</Link>
                <span
                  className={s.newsDesc}
                  dangerouslySetInnerHTML={{ __html: item.definition }}
                />
              </li>
            ))}
          </ul>
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

export default connect(mapStateToProps)(withStyles(s)(Grammars));
