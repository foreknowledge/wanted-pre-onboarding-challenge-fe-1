import { createTodo } from '../api/todos';
import useNeedLogin from '../hook/useNeedLogin';
import useTodoId from '../hook/useTodoId';
import { getUserToken } from './common/utils';
import Header from './Header';
import TodoAddForm from './TodoAddForm';
import TodoDetail from './TodoDetail';
import TodoList from './TodoList';

const TodoMain = () => {
  // 로그인 여부 확인
  useNeedLogin();

  const [todoId, setTodoId] = useTodoId();

  const addTodoItem = (title: string, content: string) => {
    const userToken = getUserToken();
    userToken &&
      createTodo(userToken, { title, content }).then((data) =>
        setTodoId(data.id)
      );
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="m-auto flex w-full max-w-4xl flex-1">
        <section className="w-2/5 bg-purple-100">
          <TodoAddForm addTodoItem={addTodoItem} />
          <TodoList selectedId={todoId} setSelectedId={(id) => setTodoId(id)} />
        </section>
        <div className="w-3/5 bg-purple-50">
          <TodoDetail selectedId={todoId} />
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
