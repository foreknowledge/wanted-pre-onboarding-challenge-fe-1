import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_USER_TOKEN_KEY, PATH_LOGIN } from '../constants';

export default function useNeedLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY);
    if (!token) {
      navigate(PATH_LOGIN);
    }
  }, []);
}
