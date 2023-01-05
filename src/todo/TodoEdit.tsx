import { Todo } from './common/Todo';

type Props = {
  todo: Todo | null;
  onChange: (todo: Todo) => void;
  onCancel: () => void;
  onApply: (todo: Todo) => void;
};

const TodoEdit = ({ todo, onChange, onCancel, onApply }: Props) => {
  return (
    todo && (
      <div className="flex flex-col">
        <input
          placeholder="제목 없음"
          value={todo.title}
          onChange={(e) => onChange({ ...todo, title: e.target.value })}
        />
        <input
          placeholder="내용 없음"
          value={todo.content}
          onChange={(e) => onChange({ ...todo, content: e.target.value })}
        />
        <button onClick={() => onCancel()}>취소</button>
        <button onClick={() => onApply(todo)}>적용</button>
      </div>
    )
  );
};

export default TodoEdit;
