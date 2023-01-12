import { AUTH_TOKEN_KEY } from '../../constants/token/token.constant';

export function getAuthToken(): string | null {
  return window.localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string): void {
  return window.localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
  return window.localStorage.removeItem(AUTH_TOKEN_KEY);
}
