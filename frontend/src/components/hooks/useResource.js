import {useState, useEffect} from 'react';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const resourse = axios.create({
  baseURL: BASE_URL,
});


const useResource = (resourcePath) => {
  let [resources, setResources] = useState([]);

  const fetchResource = async () => {
    let r = await resourse.get(resourcePath);
    setResources(r.data);
  };

  useEffect(() => {
    fetchResource();
  }, [resourcePath]);

  return [resources];
};

export default useResource;