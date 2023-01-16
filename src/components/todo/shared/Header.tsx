import { useContext } from 'react';
import TokenContext from '../../../context/TokenContext';

const Header = () => {
  const { clearToken } = useContext(TokenContext);
  const handleLogout = () => {
    const result = window.confirm('정말 로그아웃 하시겠습니까?');
    if (!result) return;

    clearToken();
  };

  return (
    <button
      className="focus:shadow-outline m-2 ml-auto block rounded bg-purple-500 py-1 px-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
      onClick={handleLogout}
    >
      로그아웃
    </button>
  );
};

export default Header;
