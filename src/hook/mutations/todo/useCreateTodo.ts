import { useMutation, useQueryClient } from 'react-query';
import apiClient from '../../../api/apiClient';
import Todo from '../../../types/todo/todo.type';

type CreateParam = {
  title: string;
  content: string;
};

async function createTodo(token: string, param: CreateParam): Promise<Todo> {
  return apiClient
    .post('/todos', param, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })
    .then((data) => data.data.data);
}

export default function useCreateTodo(token: string) {
  const queryClient = useQueryClient();
  return useMutation((param: CreateParam) => createTodo(token, param), {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
