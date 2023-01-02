import { BASE_URL } from '../constants';

export async function getTodos(token: string) {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  };
  return await fetch(BASE_URL + 'todos', options) //
    .then((response) => response.json());
}

export async function getTodoById(token: string, id: string) {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  };
  return await fetch(BASE_URL + 'todos/' + id, options) //
    .then((response) => response.json());
}

export async function createTodo(
  token: string,
  data: { title: string; content: string }
) {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return await fetch(BASE_URL + 'todos/', options) //
    .then((response) => response.json());
}

export async function updateTodo(
  token: string,
  id: string,
  data: { title: string; content: string }
) {
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return await fetch(BASE_URL + 'todos/' + id, options) //
    .then((response) => response.json());
}

export async function deleteTodo(token: string, id: string) {
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  };
  return await fetch(BASE_URL + 'todos/' + id, options) //
    .then((response) => response.json());
}
