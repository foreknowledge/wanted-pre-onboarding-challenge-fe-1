import { useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodos } from '../api/todos';
import useNeedLogin from '../hook/useNeedLogin';
import useTodoId from '../hook/useTodoId';
import { Todo } from './common/Todo';
import { getUserToken } from './common/utils';
import Header from './Header';
import TodoAddForm from './TodoAddForm';
import TodoDetail from './TodoDetail';
import TodoItem from './TodoItem';

const TodoMain = () => {
  // 로그인 여부 확인
  useNeedLogin();

  const [todoId, setTodoId] = useTodoId();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const userToken = getUserToken();
    userToken && getTodos(userToken).then(setTodos);
  }, [todoId]);

  const addTodoItem = (title: string, content: string) => {
    const userToken = getUserToken();
    userToken &&
      createTodo(userToken, { title, content }).then((data) =>
        setTodoId(data.id)
      );
  };

  const deleteTodoItem = (id: string) => {
    const userToken = getUserToken();
    userToken &&
      deleteTodo(userToken, id).then(() => {
        const lastTodo = todos
          .filter((item) => item.id !== id)
          .slice(-1)
          .at(0);
        setTodoId(lastTodo ? lastTodo.id : null);
      });
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="m-auto flex w-full max-w-4xl flex-1">
        <section className="flex w-2/5 flex-col bg-purple-100">
          <TodoAddForm addTodoItem={addTodoItem} />
          <div className="relative flex-1">
            <ul className="absolute top-0 bottom-0 left-0 right-0 overflow-scroll p-4">
              {todos
                .slice()
                .reverse()
                .map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    isSelected={todo.id === todoId}
                    onClick={(id) => setTodoId(id)}
                  />
                ))}
            </ul>
          </div>
        </section>
        <div className="w-3/5 bg-purple-50">
          <TodoDetail selectedId={todoId} deleteTodoItem={deleteTodoItem} />
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
