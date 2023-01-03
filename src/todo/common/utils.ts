import { LOCAL_STORAGE_USER_TOKEN_KEY } from '../../constants';

export function getUserToken(): string | null {
  return window.localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY);
}
