import { BASE_URL } from '../constants';

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  return await fetch(BASE_URL + 'users/login', options) //
    .then((response) => response.json());
}

export async function signup({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  return await fetch(BASE_URL + 'users/create', options) //
    .then((response) => response.json());
}
