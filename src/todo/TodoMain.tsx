import { useSearchParams } from 'react-router-dom';
import useNeedLogin from '../hook/useNeedLogin';
import Header from './Header';
import TodoDetail from './TodoDetail';
import TodoList from './TodoList';

const TodoMain = () => {
  // 로그인 여부 확인
  useNeedLogin();

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="m-auto flex w-full max-w-4xl flex-1">
        <div className="w-1/2 bg-yellow-50">
          <div>삭제</div>
          <TodoList
            selectedId={selectedId}
            setSelectedId={(id) => setSearchParams(`?id=${id}`)}
          />
        </div>
        <div className="w-1/2 bg-red-50">
          <div>추가</div>
          <TodoDetail selectedId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
