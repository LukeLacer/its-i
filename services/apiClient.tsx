import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://its-i.herokuapp.com/'
});

export default apiClient;
