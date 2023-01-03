import { useEffect, useState } from 'react';
import { getTodoById } from '../api/todos';
import { Todo } from './common/Todo';
import { getUserToken } from './common/utils';

const TodoDetail = ({ selectedId }: { selectedId: string | null }) => {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const userToken = getUserToken();
    userToken &&
      selectedId &&
      getTodoById(userToken, selectedId).then((data) => setTodo(data.data));
  }, [selectedId]);

  return (
    todo && (
      <div className="my-4 mx-8">
        <div className="mb-2 text-center text-sm font-medium text-gray-600">
          {new Date(todo.updatedAt).toLocaleString('ko', {
            dateStyle: 'long',
            timeStyle: 'short',
          })}
        </div>
        <div className="mb-2 text-2xl font-bold">{todo.title}</div>
        <div className="font-medium">{todo.content}</div>
      </div>
    )
  );
};

export default TodoDetail;
