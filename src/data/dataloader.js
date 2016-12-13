import DataLoader from 'dataloader';

import fetch from '../core/fetch';
import { baseURL, requestHeaders } from '../config';

/* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
function getJSONFromRelativeURL(relativeURL) {
  return fetch(`${baseURL}${relativeURL}`, requestHeaders)
    .then(res => res.json());
}

function getDataByURL(relativeURL) {
  return getJSONFromRelativeURL(relativeURL);
}

function getKanjis(page) {
  return getJSONFromRelativeURL(`/kanjis/search/kanjiOrderBy?page=${page}&size=20`)
    .then(data => {
      const kanjiInfo = {};
      /* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
      if (data._embedded) {
        kanjiInfo.kanjis = data._embedded.kanjis;
        kanjiInfo.kanjis.sort((a, b) => a.code - b.code);
      }

      if (data.page) {
        kanjiInfo.page = data.page;
      }
      return kanjiInfo;
    });
}

function getKanji(id) {
  return getDataByURL(`/kanjis/${id}/`);
}

function getSentenceOfKanji(id) {
  return getDataByURL(`/kanjis/${id}/sentences/`)
  .then(data => data._embedded.sentences.sort((a, b) => a.id - b.id));
}

function getWordOfKanji(id) {
  return getDataByURL(`/kanjis/${id}/words/`)
  .then(data => data._embedded.words.sort((a, b) => a.id - b.id));
}

function getGrammars(page) {
  return getJSONFromRelativeURL(`/grammars?page=${page}&size=20`)
    .then(data => {
      const grammarInfo = {};
      /* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
      if (data._embedded) {
        grammarInfo.grammars = data._embedded.grammars;
        grammarInfo.grammars.sort((a, b) => a.id - b.id);
      }

      if (data.page) {
        grammarInfo.page = data.page;
      }
      return grammarInfo;
    });
}

function getGrammar(id) {
  return getDataByURL(`/grammars/${id}/`);
}

const cacheMap = new Map();

const kanjisLoader =
  new DataLoader(keys => Promise.all(keys.map(getKanjis)), { cacheMap });

const kanjiLoader =
  new DataLoader(keys => Promise.all(keys.map(getKanji)), {
    cacheKeyFn: key => `/kanjis/${key}/`,
    cacheMap,
  });

const sentenceOfKanjiLoader =
  new DataLoader(keys => Promise.all(keys.map(getSentenceOfKanji)), {
    cacheKeyFn: key => `/kanjis/${key}/sentences/`,
    cacheMap,
  });

const wordOfKanjiLoader =
  new DataLoader(keys => Promise.all(keys.map(getWordOfKanji)), {
    cacheKeyFn: key => `/kanjis/${key}/words/`,
    cacheMap,
  });

const grammarsLoader =
  new DataLoader(keys => Promise.all(keys.map(getGrammars)), { cacheMap });

const grammarLoader =
  new DataLoader(keys => Promise.all(keys.map(getGrammar)), {
    cacheKeyFn: key => `/grammars/${key}/`,
    cacheMap,
  });

kanjiLoader.loadAll = kanjisLoader.load.bind(kanjisLoader);
kanjiLoader.loadSentences = sentenceOfKanjiLoader.load.bind(sentenceOfKanjiLoader);
kanjiLoader.loadWords = wordOfKanjiLoader.load.bind(wordOfKanjiLoader);

grammarLoader.loadAll = grammarsLoader.load.bind(grammarsLoader);

const dataloader = {
  kanji: kanjiLoader,
  grammar: grammarLoader,
};

export default dataloader;
