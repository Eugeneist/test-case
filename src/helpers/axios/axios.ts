import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.interceptors.response.use(function (response) {
  return response.data;
});

export default instance;
