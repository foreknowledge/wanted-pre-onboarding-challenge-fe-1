import { useMutation, useQueryClient } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import { getAuthToken } from '../../../utils/token/token.util';

async function deleteTodo(id: string) {
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      Authorization: getAuthToken() ?? '',
    },
  };
  return await fetch(BASE_URL + 'todos/' + id, options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
