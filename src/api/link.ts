import { AxiosInstance, AxiosPromise } from 'axios';
import Link from 'src/models/Link';

export default (axios: AxiosInstance) => ({
  getLinks: (): AxiosPromise<{ links: Link[] }> => axios.get('/api/links'),
  postLink: (uri: string): AxiosPromise<{ link: Link }> => axios.post('/api/links', { uri }),
  patchLink: (link: Link): AxiosPromise<{ link: Link }> => axios.patch(`/api/links/${link._id}`, { ...link }),
  getMetadata: (uri: string) => axios.post('/api/links/metadata', { uri }),
});
