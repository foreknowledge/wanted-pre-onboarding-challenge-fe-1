import { useMutation, useQueryClient } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import { getAuthToken } from '../../../utils/token/token.util';

async function updateTodo(data: {
  id: string;
  title: string;
  content: string;
}) {
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      Authorization: getAuthToken() ?? '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: data.title, content: data.content }),
  };
  return await fetch(BASE_URL + 'todos/' + data.id, options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
