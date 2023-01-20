import { useQuery } from 'react-query';
import apiClient from '../../../api/apiClient';
import Todo from '../../../types/todo/todo.type';

async function getTodos(token: string): Promise<Todo[]> {
  return apiClient
    .get('/todos', {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => data.data.data);
}

export default function useTodos(token: string) {
  return useQuery<Todo[], Error>('todos', () => getTodos(token), {
    initialData: [],
  });
}
