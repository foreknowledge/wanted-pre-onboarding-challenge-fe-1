import { useMutation } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';

type LoginParam = {
  email: string;
  password: string;
};

type LoginResponse = {
  message: string;
  token: string;
};

async function login(param: LoginParam): Promise<LoginResponse> {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  };
  return await fetch(BASE_URL + 'users/login', options) //
    .then((response) => response.json());
}

export default function useLogin() {
  return useMutation(login);
}
