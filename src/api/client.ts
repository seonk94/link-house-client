import Axios, { AxiosRequestConfig } from 'axios';
import { getToken } from 'src/libs/helper';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
axios.interceptors.response.use(
  (res) => res,
  (error) => {
    alert(error.message);
    return Promise.reject(error);
  },
);

export async function client<T>(params: AxiosRequestConfig): Promise<T> {
  try {
    const response = await axios(params);

    const resData: T = response.data;

    return await Promise.resolve(resData);
  } catch (e) {
    const error = await Promise.reject(e);
    return error;
  }
}

export default axios;
