
import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import Link from './../../components/Link';

const mobileStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class KanjiMobile extends React.Component {
  static propTypes = {
    kanjis: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  render() {
    const { kanjis } = this.props;
    return (
      <div style={mobileStyles.root}>
        <GridList
          cellHeight={180}
          cols={2}
          style={mobileStyles.gridList}
        >
          {kanjis.map((kanji) => (
            <GridTile
              key={kanji.code}
              title={<span><b>{kanji.meaning}</b></span>}
            >
              <center>
                <Link to={`/japanese/kanji/${String.fromCharCode(kanji.code)}`}><h1 style={{ fontSize: 48 }}>{String.fromCharCode(kanji.code)}</h1></Link>
              </center>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default KanjiMobile;
