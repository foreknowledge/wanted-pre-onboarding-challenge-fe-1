import { useQuery } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import { Todo } from '../../../types/todo/todo.type';
import { getAuthToken } from '../../../utils/token/token.util';

async function getTodos() {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: getAuthToken() ?? '',
    },
  };
  return await fetch(BASE_URL + 'todos', options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useTodos() {
  return useQuery<Todo[], Error>('todos', getTodos, { initialData: [] });
}
