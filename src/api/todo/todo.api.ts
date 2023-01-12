import { BASE_URL } from '../../constants/api/api.constant';
import { getAuthToken } from '../../utils/token/token.util';

export async function getTodos() {
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

export async function getTodoById(id: string) {
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

export async function createTodo(data: { title: string; content: string }) {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: getAuthToken() ?? '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return await fetch(BASE_URL + 'todos/', options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export async function updateTodo(
  id: string,
  data: { title: string; content: string }
) {
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      Authorization: getAuthToken() ?? '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return await fetch(BASE_URL + 'todos/' + id, options) //
    .then((response) => response.json())
    .then((data) => data.data);
}

export async function deleteTodo(id: string) {
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      Authorization: getAuthToken() ?? '',
    },
  };
  return await fetch(BASE_URL + 'todos/' + id, options) //
    .then((response) => response.json())
    .then((data) => data.data);
}
