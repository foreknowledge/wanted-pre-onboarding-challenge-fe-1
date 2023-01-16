import { useQuery } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import Todo from '../../../types/todo/todo.type';

async function getTodoById(token: string, id: string): Promise<Todo> {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  };
  return await fetch(BASE_URL + 'todos/' + id, options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useTodoById(token: string, id: string) {
  return useQuery<Todo, Error>(['todo', id], () => getTodoById(token, id));
}
