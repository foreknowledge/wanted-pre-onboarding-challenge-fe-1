import { Todo } from '../../../types/todo/todo.type';

type Props = {
  todo: Todo;
  isSelected: boolean;
  onClick: (id: string) => void;
};

const TodoItem = ({ todo, isSelected, onClick }: Props) => {
  return (
    <li
      className={`border-b-[1px] border-purple-300 px-4 py-2 ${
        isSelected ? 'rounded bg-purple-300' : ''
      }`}
      onClick={() => onClick(todo.id)}
    >
      <span className="font-bold">{todo.title}</span>
      <div className="text-sm line-clamp-2">
        <span className="mr-2 font-medium">{todo.updatedAt.split('T')[0]}</span>
        <span className="text-gray-600 ">{todo.content}</span>
      </div>
    </li>
  );
};

export default TodoItem;
