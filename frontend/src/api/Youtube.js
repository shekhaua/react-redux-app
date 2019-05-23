/*
* https://console.developers.google.com
* */

import axios from 'axios';

const KEY = 'AIzaSyCO15o5H93dUoKBqQoOcGMmsdqkosH594I';

const youtube = axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: '5',
    part: 'snippet',
    type: '',
    key: KEY
  }
});

export async function getVideosList(q) {
  const resp = await youtube.get('/search', { params: { q } });
  return resp.data.items;
}