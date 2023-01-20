import { useQuery } from 'react-query';
import apiClient from '../../../api/apiClient';
import Todo from '../../../types/todo/todo.type';

async function getTodoById(token: string, id: string): Promise<Todo> {
  return apiClient
    .get(`/todos/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => data.data.data);
}

export default function useTodoById(token: string, id: string) {
  return useQuery<Todo, Error>(['todo', id], () => getTodoById(token, id));
}
