import { Todo } from './common/Todo';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
  selectedId: string | null;
  setSelectedId: (id: string) => void;
};

const TodoList = ({ todos, selectedId, setSelectedId }: Props) => {
  return (
    <ul className="m-4">
      {todos
        .slice()
        .reverse()
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isSelected={todo.id === selectedId}
            onClick={(id) => setSelectedId(id)}
          />
        ))}
    </ul>
  );
};

export default TodoList;
