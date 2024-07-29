import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL as string, // Replace with your API base URL
});

axiosInstance.interceptors.request.use(
  config => {
    // const token = getCookie('accessToken'); // Replace 'token' with the name of your cookie
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoidGVzdGVtcGxveWVlQHplbmtvZGVycy5jb20iLCJyb2xlcyI6W3siaWQiOjE3LCJuYW1lIjoiZW1wbG95ZWUifV0sImlhdCI6MTcyMjI1MDY1NSwiZXhwIjoxNzIyMzM3MDU1fQ.7e4CF0Qlx0BIyuPCxRWRGz47F8ZBmcRwbdWt5w-RQ-k';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
