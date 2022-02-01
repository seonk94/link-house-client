import { client } from 'src/api/client';

export function getLinksApi<R>() {
  return client<R>({
    method: 'GET',
    url: '/api/links',
  });
}

export function postLinkApi<P, R>(params: P) {
  return client<R>({
    method: 'POST',
    url: '/api/links',
    data: {
      uri: params,
    },
  });
}

export function patchLinkApi<P, R>(seq: string, params: P) {
  return client<R>({
    method: 'PATCH',
    url: `/api/links/${seq}`,
    params,
  });
}

export function deleteLinkApi<R>(seq: string) {
  return client<R>({
    method: 'DELETE',
    url: `/api/links/${seq}`,
  });
}

export function getMetadataApi<P, R>(params: P) {
  return client<R>({
    method: 'POST',
    url: '/api/links/metadata',
    data: {
      uri: params,
    },
  });
}
