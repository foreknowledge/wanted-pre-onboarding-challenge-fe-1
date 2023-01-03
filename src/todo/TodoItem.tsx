import { Todo } from './common/Todo';

type Props = {
  todo: Todo;
  isSelected: boolean;
  onClick: (id: string) => void;
};

const TodoItem = ({ todo, isSelected, onClick }: Props) => {
  return (
    <li
      className={`mb-2 ${isSelected ? 'bg-purple-400' : 'bg-gray-400'}`}
      onClick={() => onClick(todo.id)}
    >
      <h1>{todo.title}</h1>
      <h2>{todo.content}</h2>
    </li>
  );
};

export default TodoItem;
