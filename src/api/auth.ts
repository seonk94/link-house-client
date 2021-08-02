import { AxiosInstance, AxiosPromise } from 'axios';
import User from 'src/models/User';

export default (axios: AxiosInstance) => ({
  signup: (input: { name: string, email: string, password: string}): AxiosPromise<{ user: User, token: string }> => axios.post('/api/auth/signup', { ...input }),
  signin: (input: { email: string, password: string }): AxiosPromise<{ user: User, token: string }> => axios.post('/api/auth/signin', { ...input }),
  getMe: (): AxiosPromise<{ user: User }> => axios.get('/api/users/me'),
});
