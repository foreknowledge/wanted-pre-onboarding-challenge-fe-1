import { useMutation } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';

type SignupParam = {
  email: string;
  password: string;
};

type SignupResponse = {
  message: string;
  token: string;
};

async function signup(param: SignupParam): Promise<SignupResponse> {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  };
  return await fetch(BASE_URL + 'users/create', options) //
    .then((response) => response.json());
}

export default function useSignup() {
  return useMutation(signup);
}
