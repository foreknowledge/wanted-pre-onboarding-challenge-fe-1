import { useSearchParams } from 'react-router-dom';
import { LOCAL_STORAGE_USER_TOKEN_KEY } from '../constants';
import useNeedLogin from '../hook/useNeedLogin';
import TodoDetail from './TodoDetail';
import TodoList from './TodoList';

const TodoMain = () => {
  // 로그인 여부 확인
  useNeedLogin();

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  const handleLogout = () => {
    const result = window.confirm('정말 로그아웃 하시겠습니까?');
    if (!result) return;

    window.localStorage.removeItem(LOCAL_STORAGE_USER_TOKEN_KEY);
    window.location.reload();
  };

  return (
    <div className="flex h-full flex-col">
      <button
        className="focus:shadow-outline my-2 ml-auto block rounded bg-purple-500 py-2 px-4 font-bold text-white shadow focus:outline-none enabled:hover:bg-purple-400 disabled:bg-gray-400"
        onClick={handleLogout}
      >
        로그 아웃
      </button>
      <div className="flex w-[50em] flex-1">
        <div className="w-1/2 bg-yellow-50">
          <TodoList
            selectedId={selectedId}
            setSelectedId={(id) => setSearchParams(`?id=${id}`)}
          />
        </div>
        <div className="w-1/2 bg-red-50">
          <TodoDetail selectedId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
