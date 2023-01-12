import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_MAIN } from '../constants/routes/routes.constant';
import { getLoginToken } from '../utils/token/token.util';

export default function useBlockLoginUser() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getLoginToken();
    if (token) {
      navigate(PATH_MAIN);
    }
  }, [navigate]);
}
