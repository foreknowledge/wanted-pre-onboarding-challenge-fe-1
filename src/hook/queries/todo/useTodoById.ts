import { useQuery } from 'react-query';
import { BASE_URL } from '../../../constants/api/api.constant';
import { Todo } from '../../../types/todo/todo.type';
import { getAuthToken } from '../../../utils/token/token.util';

async function getTodoById(id: string) {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: getAuthToken() ?? '',
    },
  };
  return await fetch(BASE_URL + 'todos/' + id, options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export default function useTodoById(id: string) {
  return useQuery<Todo, Error>(['todo', id], () => getTodoById(id));
}
