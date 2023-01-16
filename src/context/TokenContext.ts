import { createContext } from 'react';
import AuthToken from '../types/token/token.type';

const TokenContext = createContext<{
  token: AuthToken;
  saveToken: (token: string) => void;
  clearToken: () => void;
}>({ token: null, saveToken: () => {}, clearToken: () => {} });

export default TokenContext;
