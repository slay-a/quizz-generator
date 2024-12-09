import axios from 'axios';

const APIClient = axios.create({
//   baseURL: 'http://dhanutek-hrms.westus2.cloudapp.azure.com/api',
  baseURL: 'http://localhost:3500',
  // timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default APIClient;