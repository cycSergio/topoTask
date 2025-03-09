import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchData = async () => {
  const response = await axios.get(`${API_URL}/data`);
  return response.data;
};
