import TodoItem from './TodoItem';
import TodoList from './TodoList';

const TodoMain = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-yellow-50">
        <TodoList />
      </div>
      <div className="w-1/2 bg-red-50">
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoMain;
