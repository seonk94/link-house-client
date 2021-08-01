import { AxiosInstance, AxiosPromise } from 'axios';
import User from 'src/models/User';

export default (axios: AxiosInstance) => ({
  signup: (input: { name: string, email: string, password: string}) => axios.post('/api/auth/signup', { ...input }) as AxiosPromise<{ user: User, token: string }>,
  signin: (input: { email: string, password: string }) => axios.post('/api/auth/signin', { ...input }) as AxiosPromise<{ user: User, token: string }>,
  getMe: () => axios.get('/api/users/me') as AxiosPromise<{ user: User }>,
});
