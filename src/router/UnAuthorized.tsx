import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import TokenContext from '../context/TokenContext';

const UnAuthorized = () => {
  const { token } = useContext(TokenContext);

  if (token !== null) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default UnAuthorized;
