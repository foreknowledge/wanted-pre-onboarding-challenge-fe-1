import { useContext } from 'react';
import TokenContext from '../../../context/TokenContext';
import useTodos from '../../../hook/queries/todo/useTodos';
import { Todo } from '../../../types/todo/todo.type';
import TodoItem from '../list/TodoItem';

type Props = {
  curTodo: Todo | undefined;
  onItemClick: (id: string) => void;
};

const TodoList = ({ curTodo, onItemClick }: Props) => {
  const { token } = useContext(TokenContext);
  const { data: todos } = useTodos(token);

  return (
    <ul className="absolute top-0 bottom-0 left-0 right-0 overflow-scroll p-4">
      {todos &&
        [...todos]
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
