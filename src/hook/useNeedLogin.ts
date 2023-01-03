import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_LOGIN } from '../constants';
import { getUserToken } from '../todo/common/utils';

export default function useNeedLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getUserToken();
    if (!token) {
      navigate(PATH_LOGIN);
    }
  }, []);
}
