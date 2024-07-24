import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL as string, // Replace with your API base URL
});

axiosInstance.interceptors.request.use(
  config => {
    // const token = getCookie('accessToken'); // Replace 'token' with the name of your cookie
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsInJvbGVzIjpbeyJpZCI6NCwibmFtZSI6ImVtcGxveWVlIn1dLCJpYXQiOjE3MjE4MjQwMzAsImV4cCI6MTcyMTkxMDQzMH0.gYwRSdTCiM83zJw_3cochGANx_ctz1ObLTNxIltp8eU';

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
