import axios from 'axios';

// Create axios client, pre-configured with baseURL
export const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/.netlify/functions`,
  timeout: 10000,
});