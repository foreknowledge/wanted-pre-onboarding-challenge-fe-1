import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams } from 'react-router-dom';
import { createTodo } from '../api/todos';
import useNeedLogin from '../hook/useNeedLogin';
import { getUserToken } from './common/utils';
import Header from './Header';
import TodoAddForm from './TodoAddForm';
import TodoDetail from './TodoDetail';
import TodoList from './TodoList';

const TodoMain = () => {
  // 로그인 여부 확인
  useNeedLogin();

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  const addTodoItem = (title: string, content: string) => {
    const userToken = getUserToken();
    userToken &&
      createTodo(userToken, { title, content }).then((data) => {
        setSearchParams(`?id=${data.data.id}`);
      });
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="m-auto flex w-full max-w-4xl flex-1">
        <section className="w-2/5 bg-purple-100">
          <TodoAddForm addTodoItem={addTodoItem} />
          <TodoList
            selectedId={selectedId}
            setSelectedId={(id) => setSearchParams(`?id=${id}`)}
          />
        </section>
        <div className="w-3/5 bg-purple-50">
          <div className="flex justify-between">
            <FontAwesomeIcon
              icon={faTrashCan}
              className="m-3 h-6 w-6 rounded p-1 text-gray-600 hover:bg-purple-200"
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="m-3 h-6 w-6 rounded p-1 text-gray-600 hover:bg-purple-200"
            />
          </div>
          <TodoDetail selectedId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
