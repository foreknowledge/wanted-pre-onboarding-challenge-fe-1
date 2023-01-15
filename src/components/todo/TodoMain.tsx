import { useEffect, useState } from 'react';
import useCreateTodo from '../../hook/mutations/todo/useCreateTodo';
import useDeleteTodo from '../../hook/mutations/todo/useDeleteTodo';
import useUpdateTodo from '../../hook/mutations/todo/useUpdateTodo';
import useTodos from '../../hook/queries/todo/useTodos';
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

  const { data: todos, refetch: refreshTodos } = useTodos();
  const { mutate: createTodo } = useCreateTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  // 현재 선택된 Todo Id
  const [curTodoId, navigateTodo] = useNavigateTodo();
  // 현재 편집 중인 Todo를 실시간으로 화면에 반영하기 위한 데이터
  const [curTodo, setCurTodo] = useState<Todo | undefined>();
  // 편집 모드 on/off
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setCurTodo(todos?.find((item) => item.id === curTodoId));
  }, [todos, curTodoId]);

  const handleAdd = (title: string, content: string) => {
    if (isEditing) {
      // 편집 중이라면 자동 저장
      handleEditApply();
    }

    createTodo(
      { title, content },
      { onSuccess: (data) => navigateTodo(data.id) }
    );
  };

  const handleDelete = (id: string) => {
    deleteTodo(id, {
      onSuccess: () => {
        const lastTodo = todos?.filter((item) => item.id !== id).at(-1);
        navigateTodo(lastTodo?.id ?? null);
      },
    });
  };

  const handleEditCancel = (prevTodo: Todo) => {
    setIsEditing(false);
    setCurTodo(prevTodo);
  };

  const handleEditApply = () => {
    setIsEditing(false);

    if (!curTodo) return;

    updateTodo(curTodo, { onSuccess: refreshTodos });
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="m-auto flex w-full flex-1">
        <section className="flex w-2/5 flex-col bg-purple-100">
          <TodoAddForm onAdd={handleAdd} />
          <div className="relative flex-1">
            <TodoList
              curTodo={curTodo}
              onItemClick={(id) => {
                if (isEditing) {
                  // 편집 중이라면 자동 저장
                  handleEditApply();
                }
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
              onChange={setCurTodo}
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
