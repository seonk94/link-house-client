import client from 'src/utils/client';
import auth from './auth';
import link from './link';

export default {
  link: link(client),
  auth: auth(client),
};
