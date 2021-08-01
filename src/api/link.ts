import { AxiosInstance, AxiosPromise } from 'axios';
import Link from 'src/models/Link';

export default (axios: AxiosInstance) => ({
  getLinks: () => axios.get('/api/links') as AxiosPromise<Link[]>,
});
