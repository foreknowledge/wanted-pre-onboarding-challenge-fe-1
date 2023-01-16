import { useMutation } from 'react-query';
import apiClient from '../../../api/apiClient';

type SignupParam = {
  email: string;
  password: string;
};

type SignupResponse = {
  message: string;
  token: string;
};

async function signup(param: SignupParam): Promise<SignupResponse> {
  return apiClient
    .post('/users/create', param, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((data) => data.data);
}

export default function useSignup() {
  return useMutation(signup);
}
