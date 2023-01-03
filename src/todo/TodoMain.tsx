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
        <div className="w-2/5 bg-purple-100">
          <div className="flex justify-end">
            <img
              src="/images/trash-can-regular.svg"
              alt="delete"
              className="m-2 h-8 w-8 rounded p-1 hover:bg-purple-200"
            />
          </div>
          <TodoList
            selectedId={selectedId}
            setSelectedId={(id) => setSearchParams(`?id=${id}`)}
          />
        </div>
        <div className="w-3/5 bg-purple-50">
          <div>
            <img
              src="/images/pen-to-square-regular.svg"
              alt="new"
              className="m-2 h-8 w-8 rounded p-1 hover:bg-purple-200"
            />
          </div>
          <TodoDetail selectedId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
