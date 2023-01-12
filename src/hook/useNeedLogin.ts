import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoginToken } from '../utils/token/token.util';

export default function useNeedLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getLoginToken();
    if (!token) {
      navigate('/auth/login');
    }
  }, [navigate]);
}
