import axios from 'axios';

const client = (() => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = localStorage.getItem('token');
      return config;
    },
    (error) => Promise.reject(error),
  );
  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      alert(error.message);
      return Promise.reject(error);
    },
  );
  return axiosInstance;
})();

export default client;
