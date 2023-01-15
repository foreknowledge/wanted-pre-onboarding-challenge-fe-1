import { useMutation } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';

async function login(userInfo: { email: string; password: string }) {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  };
  return await fetch(BASE_URL + 'users/login', options) //
    .then((response) => response.json());
}

export default function useLogin() {
  return useMutation(login);
}
