import { createContext } from 'react';

const TokenContext = createContext<{
  token: string | null;
  saveToken: (token: string) => void;
  clearToken: () => void;
}>({ token: null, saveToken: () => {}, clearToken: () => {} });

export default TokenContext;
