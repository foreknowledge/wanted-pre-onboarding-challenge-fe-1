import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { getTodoById } from '../api/todos';
import { Todo } from './common/Todo';
import { getUserToken } from './common/utils';

type Props = {
  selectedId: string | null;
  deleteTodoItem: (id: string) => void;
};

const TodoDetail = ({ selectedId, deleteTodoItem }: Props) => {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const userToken = getUserToken();
    if (!userToken || !selectedId) {
      setTodo(null);
      return;
    }

    getTodoById(userToken, selectedId).then((data) => setTodo(data));
  }, [selectedId]);

  return (
    todo && (
      <>
        <div className="flex justify-between">
          <FontAwesomeIcon
            icon={faTrashCan}
            className="m-3 h-6 w-6 rounded p-1 text-gray-500 hover:bg-purple-200"
            onClick={() => deleteTodoItem(todo.id)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="m-3 h-6 w-6 rounded p-1 text-gray-500 hover:bg-purple-200"
          />
        </div>
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
      </>
    )
  );
};

export default TodoDetail;
