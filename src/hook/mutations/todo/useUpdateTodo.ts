import { useMutation, useQueryClient } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import AuthToken from '../../../types/token/token.type';

type UpdateParam = {
  id: string;
  title: string;
  content: string;
};

async function updateTodo(token: AuthToken, param: UpdateParam) {
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      Authorization: token ?? '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: param.title, content: param.content }),
  };
  return await fetch(BASE_URL + 'todos/' + param.id, options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useUpdateTodo(token: AuthToken) {
  const queryClient = useQueryClient();
  return useMutation((param: UpdateParam) => updateTodo(token, param), {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
