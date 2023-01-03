import { LOCAL_STORAGE_USER_TOKEN_KEY } from '../constants';

const Header = () => {
  const handleLogout = () => {
    const result = window.confirm('정말 로그아웃 하시겠습니까?');
    if (!result) return;

    window.localStorage.removeItem(LOCAL_STORAGE_USER_TOKEN_KEY);
    window.location.reload();
  };

  return (
    <button
      className="focus:shadow-outline m-2 ml-auto block rounded bg-purple-500 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
      onClick={handleLogout}
    >
      로그 아웃
    </button>
  );
};

export default Header;
