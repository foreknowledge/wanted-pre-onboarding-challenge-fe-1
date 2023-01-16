import { useMutation, useQueryClient } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import Todo from '../../../types/todo/todo.type';

type CreateParam = {
  title: string;
  content: string;
};

async function createTodo(token: string, param: CreateParam): Promise<Todo> {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  };
  return await fetch(BASE_URL + 'todos/', options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useCreateTodo(token: string) {
  const queryClient = useQueryClient();
  return useMutation((param: CreateParam) => createTodo(token, param), {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });
}
