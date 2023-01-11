import { LOCAL_STORAGE_USER_TOKEN_KEY } from '../../constants/token/token.constant';

export function getUserToken(): string | null {
  return window.localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY);
}
