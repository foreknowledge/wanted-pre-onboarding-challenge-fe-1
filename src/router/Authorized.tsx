import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import TokenContext from '../context/TokenContext';

const Authorized = () => {
  const token = useContext(TokenContext);

  if (token === null) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};

export default Authorized;
