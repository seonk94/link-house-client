import { client } from 'src/api/client';

export function getStatusApi() {
  return client({
    method: 'GET',
    url: '/api/status',
  });
}
