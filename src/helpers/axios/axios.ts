import axios from "axios";


const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

API.interceptors.response.use(function (response) {
  return response.data;
});

export default API;