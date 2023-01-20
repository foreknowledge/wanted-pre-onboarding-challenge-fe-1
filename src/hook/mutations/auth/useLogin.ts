import { useMutation } from 'react-query';
import apiClient from '../../../api/apiClient';

type LoginParam = {
  email: string;
  password: string;
};

type LoginResponse = {
  message: string;
  token: string;
};

async function login(param: LoginParam): Promise<LoginResponse> {
  return apiClient
    .post('/users/login', param, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((data) => data.data);
}

export default function useLogin() {
  return useMutation(login);
}
