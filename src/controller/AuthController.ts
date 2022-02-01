import { client } from 'src/api/client';

export function signupApi<R, P>(params: P) {
  return client<R>({
    method: 'POST',
    url: '/api/auth/signup',
  });
}

export function signinApi<P, R>(params: P) {
  return client<R>({
    method: 'POST',
    url: '/api/auth/signin',
    params,
  });
}

export function getMeApi<R>() {
  return client<R>({
    method: 'GET',
    url: '/api/users/me',
  });
}

export function findPasswordApi<P, R>(params: P) {
  return client<R>({
    method: 'POST',
    url: '/api/users/find',
    params,
  });
}

export function updateUserApi<P, R>(seq: string, params: P) {
  return client<R>({
    method: 'PATCH',
    url: `/api/users/${seq}`,
    params,
  });
}
