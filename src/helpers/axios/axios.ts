import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Eugeneist',
});

instance.interceptors.response.use(function (response) {
  return response.data;
});

export default instance;
