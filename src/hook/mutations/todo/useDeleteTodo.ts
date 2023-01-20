import { useMutation, useQueryClient } from 'react-query';
import apiClient from '../../../api/apiClient';

async function deleteTodo(token: string, id: string): Promise<null> {
  return apiClient
    .delete(`/todos/${id}`, {
      headers: { Authorization: token },
    })
    .then((data) => data.data.data);
}

export default function useDeleteTodo(token: string) {
  const queryClient = useQueryClient();
  return useMutation((id: string) => deleteTodo(token, id), {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
