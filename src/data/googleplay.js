import DataLoader from 'dataloader';
import gplay from 'google-play-scraper';
import { host } from '../config';
import fetch from '../core/fetch';

const BASE_URL = `http://${host}/api/apps`;

function getApps(page) {
  return fetch(`${BASE_URL}?start=${page * 60}`)
    .then(res => res.json())
    .then(data => data.results);
}

function getApp(id) {
  return fetch(`${BASE_URL}/${id}`)
    .then(res => res.json());
}

async function getGames() {
  return gplay.list({
    category: gplay.category.GAME,
    collection: gplay.collection.TOP_FREE,
    num: 4,
  });
}

const cacheMap = new Map();

const gameLoader =
  new DataLoader(keys => Promise.all(keys.map(getGames)), { cacheMap });

const appLoader =
  new DataLoader(keys => Promise.all(keys.map(getApp)), { cacheMap });

const appsLoader =
  new DataLoader(keys => Promise.all(keys.map(getApps)), { cacheMap });

appLoader.loadAll = appsLoader.load.bind(appsLoader);

const googleplay = {
  game: gameLoader,
  app: appLoader,
};

export default googleplay;
