import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const jsonPlaceholder = axios.create({
  baseURL: BASE_URL,
});


export async function fetchPosts() {
  const posts = await jsonPlaceholder.get('/posts');
  return posts.data;
}

export async function fetchUser(id) {
  const user = await jsonPlaceholder.get(`/users/${id}`);
  return user.data;
}

export async function fetchTodos() {
  const posts = await jsonPlaceholder.get('/todos');
  return posts.data;
}

