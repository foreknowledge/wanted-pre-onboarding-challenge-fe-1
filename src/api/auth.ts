import { BASE_URL } from '../constants';

export async function login() {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'test@email.com',
      password: '12345678',
    }),
  };
  return await fetch(BASE_URL + 'users/login', options) //
    .then((response) => response.json());
}

export async function signup() {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'test@email.com',
      password: '12345678',
    }),
  };
  return await fetch(BASE_URL + 'users/create', options) //
    .then((response) => response.json());
}
