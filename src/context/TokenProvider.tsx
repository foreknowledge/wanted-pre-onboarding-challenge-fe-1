import { ReactNode } from 'react';
import { AUTH_TOKEN_KEY } from '../constants/token/token.constant';
import TokenContext from './TokenContext';

export default function TonkenProvider({ children }: { children: ReactNode }) {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
}
