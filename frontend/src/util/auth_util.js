import axios from 'axios';

export const fetchAmazonCallback = () => {
  return axios.get('/api/authorize/callback');
};