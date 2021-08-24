import { AxiosInstance, AxiosPromise } from 'axios';
import User from 'src/models/User';

export default (axios: AxiosInstance) => ({
  signup: (input: { name: string, email: string, password: string}): AxiosPromise<{ user: User, token: string }> => axios.post('/api/auth/signup', { ...input }),
  signin: (input: { email: string, password: string }): AxiosPromise<{ user: User, token: string }> => axios.post('/api/auth/signin', { ...input }),
  getMe: (): AxiosPromise<{ user: User, token: string }> => axios.get('/api/users/me'),
  findPassword: (input: { email: string, name: string }): AxiosPromise<{ userId: string | null }> => axios.post('/api/users/find', { ...input }),
  updateUser: (userId: string, user: Partial<User>): AxiosPromise<{ user: User}> => axios.patch(`/api/users/${userId}`, { ...user }),
});
