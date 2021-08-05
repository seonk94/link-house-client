import { AxiosInstance, AxiosPromise } from 'axios';
import Link from 'src/models/Link';

export default (axios: AxiosInstance) => ({
  getLinks: (): AxiosPromise<{ links: Link[] }> => axios.get('/api/links'),
  postLink: (uri: string): AxiosPromise<{ link: Link }> => axios.post('/api/links', { uri }),
  getMetadata: (uri: string) => axios.post('/api/links/metadata', { uri }),
});
