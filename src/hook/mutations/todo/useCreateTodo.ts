import { useMutation, useQueryClient } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import { getAuthToken } from '../../../utils/token/token.util';

async function createTodo(data: { title: string; content: string }) {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: getAuthToken() ?? '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return await fetch(BASE_URL + 'todos/', options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
