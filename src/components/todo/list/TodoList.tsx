import { Todo } from '../../../types/todo/todo.type';
import TodoItem from '../list/TodoItem';

type Props = {
  todos: Todo[];
  curTodo: Todo | undefined;
  onItemClick: (id: string) => void;
};

const TodoList = ({ todos, curTodo, onItemClick }: Props) => {
  return (
    <ul className="absolute top-0 bottom-0 left-0 right-0 overflow-scroll p-4">
      {todos
        .slice()
        .reverse()
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo.id === curTodo?.id ? curTodo : todo}
            isSelected={todo.id === curTodo?.id}
            onClick={onItemClick}
          />
        ))}
    </ul>
  );
};

export default TodoList;
