import { useMutation, useQueryClient } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import AuthToken from '../../../types/token/token.type';

async function deleteTodo(token: AuthToken, id: string): Promise<null> {
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      Authorization: token ?? '',
    },
  };
  return await fetch(BASE_URL + 'todos/' + id, options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useDeleteTodo(token: AuthToken) {
  const queryClient = useQueryClient();
  return useMutation((id: string) => deleteTodo(token, id), {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
