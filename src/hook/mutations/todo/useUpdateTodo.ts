import { useMutation, useQueryClient } from 'react-query';
import apiClient from '../../../api/apiClient';
import Todo from '../../../types/todo/todo.type';

type UpdateParam = {
  id: string;
  title: string;
  content: string;
};

async function updateTodo(token: string, param: UpdateParam): Promise<Todo> {
  const data = { title: param.title, content: param.content };
  return apiClient
    .put(`/todos/${param.id}`, data, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })
    .then((data) => data.data.data);
}

export default function useUpdateTodo(token: string) {
  const queryClient = useQueryClient();
  return useMutation((param: UpdateParam) => updateTodo(token, param), {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
