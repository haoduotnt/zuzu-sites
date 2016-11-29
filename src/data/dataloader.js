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
  return getJSONFromRelativeURL(`/kanjis?page=${page}&size=20`)
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

kanjiLoader.loadAll = kanjisLoader.load.bind(kanjisLoader);
kanjiLoader.loadSentences = sentenceOfKanjiLoader.load.bind(sentenceOfKanjiLoader);
kanjiLoader.loadWords = wordOfKanjiLoader.load.bind(wordOfKanjiLoader);

const dataloader = {
  kanji: kanjiLoader,
};

export default dataloader;
