import axios from 'axios';
const BASE_URL = 'https://api.unsplash.com/';

const unsplash = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Client-ID fafdce51cc812c456228e3a9b2d1d2c05e3af839c9b1455593cfd9ddd01c9de4"
  }
});

export async function getUnsplashImages(query) {
  const resp = await unsplash.get('/search/photos', { params: {query} });
  return resp.data;
}