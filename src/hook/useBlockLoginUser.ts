import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_MAIN } from '../constants';
import { getUserToken } from '../todo/common/utils';

export default function useBlockLoginUser() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getUserToken();
    if (token) {
      navigate(PATH_MAIN);
    }
  }, []);
}
