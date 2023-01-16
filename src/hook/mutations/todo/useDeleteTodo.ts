import { useMutation, useQueryClient } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';

async function deleteTodo(token: string | null, id: string) {
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

export default function useDeleteTodo(token: string | null) {
  const queryClient = useQueryClient();
  return useMutation((id: string) => deleteTodo(token, id), {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
