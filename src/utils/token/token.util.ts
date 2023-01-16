import { AUTH_TOKEN_KEY } from '../../constants/token/token.constant';

export function getAuthToken(): string | null {
  return window.localStorage.getItem(AUTH_TOKEN_KEY);
}
