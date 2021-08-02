import { AxiosInstance, AxiosPromise } from 'axios';
import Link from 'src/models/Link';

export default (axios: AxiosInstance) => ({
  getLinks: (): AxiosPromise<Link[]> => axios.get('/api/links'),
  getMetadata: (uri: string) => axios.post('/api/links/metadata', { uri }),
});
