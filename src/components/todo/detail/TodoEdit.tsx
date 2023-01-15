import { FormEvent, useRef } from 'react';
import { Todo } from '../../../types/todo/todo.type';

type Props = {
  todo: Todo;
  onChange: (todo: Todo) => void;
  onCancel: (prevTodo: Todo) => void;
  onApply: () => void;
};

const TodoEdit = ({ todo, onChange, onCancel, onApply }: Props) => {
  // 변경 전 Todo 데이터 백업
  const { current: prevTodo } = useRef<Todo>({ ...todo });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onApply();
  };

  return (
    <form className="flex flex-1 flex-col py-4" onSubmit={handleSubmit}>
      <div className="mb-6 ml-auto">
        <button
          className="mx-3 text-lg font-bold text-purple-700 hover:opacity-60"
          type="button"
          onClick={() => onCancel(prevTodo)}
        >
          취소
        </button>
        <button
          className="mx-3 text-lg font-bold text-purple-700 hover:opacity-60"
          type="submit"
        >
          적용
        </button>
      </div>
      <input
        className="mb-2 appearance-none bg-transparent px-8 text-2xl font-bold focus:outline-none"
        autoFocus
        placeholder="제목 없음"
        type="text"
        value={todo.title}
        onChange={(e) => onChange({ ...todo, title: e.target.value })}
      />
      <textarea
        className="flex-1 resize-none appearance-none bg-transparent px-8 font-medium focus:outline-none"
        placeholder="내용 없음"
        value={todo.content}
        onChange={(e) => onChange({ ...todo, content: e.target.value })}
      />
    </form>
  );
};

export default TodoEdit;
