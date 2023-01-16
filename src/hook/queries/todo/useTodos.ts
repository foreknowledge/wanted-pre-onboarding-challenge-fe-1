import { useQuery } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import Todo from '../../../types/todo/todo.type';
import AuthToken from '../../../types/token/token.type';

async function getTodos(token: AuthToken): Promise<Todo[]> {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: token ?? '',
    },
  };
  return await fetch(BASE_URL + 'todos', options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useTodos(token: AuthToken) {
  return useQuery<Todo[], Error>('todos', () => getTodos(token), {
    initialData: [],
  });
}
