import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_LOGIN } from '../constants/routes/routes.constant';
import { getUserToken } from '../utils/todo/todo.util';

export default function useNeedLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getUserToken();
    if (!token) {
      navigate(PATH_LOGIN);
    }
  }, [navigate]);
}
