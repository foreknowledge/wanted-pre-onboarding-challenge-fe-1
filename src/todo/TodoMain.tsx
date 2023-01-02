import useNeedLogin from '../hook/useNeedLogin';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

const TodoMain = () => {
  // 로그인 여부 확인
  useNeedLogin();

  return (
    <div className="flex h-full w-[50em]">
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
