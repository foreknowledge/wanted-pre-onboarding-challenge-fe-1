import { ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { AUTH_TOKEN_KEY } from '../constants/token/token.constant';
import TokenContext from './TokenContext';

export default function TonkenProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  const saveToken = useCallback(
    (token: string) => {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      navigate('/');
    },
    [navigate]
  );

  const clearToken = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    navigate('/auth/login');
  }, [navigate]);

  return (
    <TokenContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
}
