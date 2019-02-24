import axios from 'axios';
const BASE_URL = 'https://api.unsplash.com/';

const unsplash = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Client-ID your client id"
  }
});

export async function getUnsplashImages(query) {
  const resp = await unsplash.get('/search/photos', { params: {query} });
  return resp.data;
}