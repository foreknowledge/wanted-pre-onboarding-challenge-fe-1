import { useEffect, useState } from 'react';
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from '../../api/todo/todo.api';
import useNavigateTodo from '../../hook/useNavigateTodo';
import useNeedLogin from '../../hook/useNeedLogin';
import { Todo } from '../../types/todo/todo.type';
import TodoDetail from './detail/TodoDetail';
import TodoEdit from './detail/TodoEdit';
import TodoAddForm from './list/TodoAddForm';
import TodoList from './list/TodoList';
import Header from './shared/Header';

const TodoMain = () => {
  // 로그인 여부 확인
  useNeedLogin();

  const [todoId, navigateTodo] = useNavigateTodo();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const curTodo = todos.find((item) => item.id === todoId) || null;

  useEffect(() => {
    getTodos().then(setTodos);
  }, [todoId]);

  const handleAdd = (title: string, content: string) => {
    // 편집 중이라면 자동 저장
    isEditing && curTodo && handleEditApply(curTodo);

    createTodo({ title, content }).then((data) => navigateTodo(data.id));
  };

  const handleDelete = (id: string) => {
    deleteTodo(id).then(() => {
      const lastTodo = todos
        .filter((item) => item.id !== id)
        .slice(-1)
        .at(0);
      navigateTodo(lastTodo?.id || null);
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
    setIsEditing(false);
    getTodos().then(setTodos);
  };

  const handleEditApply = (todo: Todo) => {
    setIsEditing(false);
    updateTodo(todo.id, {
      title: todo.title,
      content: todo.content,
    }).then(() => {
      getTodos().then(setTodos);
    });
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="m-auto flex w-full flex-1">
        <section className="flex w-2/5 flex-col bg-purple-100">
          <TodoAddForm onAdd={handleAdd} />
          <div className="relative flex-1">
            <TodoList
              todos={todos}
              todoId={todoId}
              onItemClick={(id) => {
                // 편집 중이라면 자동 저장
                isEditing && curTodo && handleEditApply(curTodo);
                navigateTodo(id);
              }}
            />
          </div>
        </section>
        <div className="flex w-3/5 flex-col bg-purple-50">
          {curTodo && !isEditing && (
            <TodoDetail
              todo={curTodo}
              onDelete={handleDelete}
              onEdit={() => setIsEditing(true)}
            />
          )}
          {curTodo && isEditing && (
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
