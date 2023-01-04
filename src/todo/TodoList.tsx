import { useEffect, useState } from 'react';
import { getTodos } from '../api/todos';
import { Todo } from './common/Todo';
import TodoItem from './TodoItem';
import { getUserToken } from './common/utils';

type Props = {
  selectedId: string | null;
  setSelectedId: (id: string) => void;
};

const TodoList = ({ selectedId, setSelectedId }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const userToken = getUserToken();
    userToken && getTodos(userToken).then((data) => setTodos(data.reverse()));
  }, [selectedId]);

  return (
    <ul className="m-4">
      {todos.map((todo) => (
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
