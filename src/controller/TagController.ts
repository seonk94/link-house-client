import { client } from 'src/api/client';

export function getTagApi<R>() {
  return client<R>({
    method: 'GET',
    url: '/api/tag',
  });
}

export function postTagApi<P, R>(params: string) {
  return client<R>({
    method: 'POST',
    url: '/api/tag',
    data: {
      userId: params,
    },
  });
}

export function patchTagApi<P, R>(params: P) {
  return client<R>({
    method: 'PATCH',
    url: `/api/tag`,
    data: {
      tags: params,
    },
  });
}
