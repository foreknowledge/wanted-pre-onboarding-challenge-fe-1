import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Todo } from '../../../types/todo/todo.type';

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const TodoDetail = ({ todo, onDelete, onEdit }: Props) => {
  return (
    <>
      <div className="flex justify-between">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="m-3 h-6 w-6 rounded p-1 text-gray-500 hover:bg-purple-200"
          onClick={() => onDelete(todo.id)}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="m-3 h-6 w-6 rounded p-1 text-gray-500 hover:bg-purple-200"
          onClick={() => onEdit(todo.id)}
        />
      </div>
      <div className="flex flex-1 flex-col py-4">
        <div className="mb-2 text-center text-sm font-medium text-gray-600">
          {new Date(todo.updatedAt).toLocaleString('ko', {
            dateStyle: 'long',
            timeStyle: 'short',
          })}
        </div>
        <div className="mb-2 px-8 text-2xl font-bold">{todo.title}</div>
        <div className="relative flex-1">
          <div className="absolute top-0 bottom-0 right-0 left-0 overflow-scroll whitespace-pre-line px-8 font-medium">
            {todo.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoDetail;
