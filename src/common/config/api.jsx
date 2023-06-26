import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://book-finder1.p.rapidapi.com/api/search'
});

export default instance;