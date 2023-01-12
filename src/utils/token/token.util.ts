import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';

export function getLoginToken(): string | null {
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setLoginToken(token: string): void {
  return window.localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function clearLoginToken(): void {
  return window.localStorage.removeItem(ACCESS_TOKEN_KEY);
}
