import { useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../api/todos';
import useNeedLogin from '../hook/useNeedLogin';
import useTodoId from '../hook/useTodoId';
import { Todo } from './common/Todo';
import { getUserToken } from './common/utils';
import Header from './Header';
import TodoAddForm from './TodoAddForm';
import TodoDetail from './TodoDetail';
import TodoEdit from './TodoEdit';
import TodoItem from './TodoItem';

const TodoMain = () => {
  // 로그인 여부 확인
  useNeedLogin();

  const [todoId, setTodoId] = useTodoId();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const curTodo = todos.find((item) => item.id === todoId) || null;

  useEffect(() => {
    const userToken = getUserToken();
    userToken && getTodos(userToken).then(setTodos);
  }, [todoId]);

  const handleAdd = (title: string, content: string) => {
    const userToken = getUserToken();
    userToken &&
      createTodo(userToken, { title, content }).then((data) =>
        setTodoId(data.id)
      );
  };

  const handleDelete = (id: string) => {
    const userToken = getUserToken();
    userToken &&
      deleteTodo(userToken, id).then(() => {
        const lastTodo = todos
          .filter((item) => item.id !== id)
          .slice(-1)
          .at(0);
        setTodoId(lastTodo?.id || null);
      });
  };

  const handleEditChange = (todo: Todo) => {
    const idx = todos.findIndex((item) => item.id === todo.id);
    if (idx >= 0) {
      const newTodos = [...todos];
      newTodos[idx] = todo;
      setTodos(newTodos);
    }
  };

  const handleEditCancel = () => {
    setIsEdit(false);
    const userToken = getUserToken();
    userToken && getTodos(userToken).then(setTodos);
  };

  const handleEditApply = (todo: Todo) => {
    setIsEdit(false);
    const userToken = getUserToken();
    userToken &&
      updateTodo(userToken, todo.id, {
        title: todo.title,
        content: todo.content,
      }).then(() => {
        getTodos(userToken).then(setTodos);
      });
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="m-auto flex w-full max-w-4xl flex-1">
        <section className="flex w-2/5 flex-col bg-purple-100">
          <TodoAddForm onAdd={handleAdd} />
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
                    onClick={(id) => {
                      handleEditCancel();
                      setTodoId(id);
                    }}
                  />
                ))}
            </ul>
          </div>
        </section>
        <div className="w-3/5 bg-purple-50">
          {!isEdit && (
            <TodoDetail
              todo={curTodo}
              onDelete={handleDelete}
              onEdit={() => setIsEdit(true)}
            />
          )}
          {isEdit && (
            <TodoEdit
              todo={curTodo}
              onChange={handleEditChange}
              onCancel={handleEditCancel}
              onApply={handleEditApply}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
