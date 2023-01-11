import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';

type Props = {
  onAdd: (title: string, content: string) => void;
};

const TodoAddForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title) {
      alert('올바른 텍스트를 입력 해 주세요.');
      return;
    }

    onAdd(title, '');
    setTitle('');
  };

  return (
    <form
      className="m-4 flex items-center rounded border-2 border-purple-500 bg-white p-2"
      onSubmit={handleSubmit}
    >
      <button
        className="flex items-center text-purple-700 hover:opacity-60"
        type="submit"
      >
        <FontAwesomeIcon icon={faPlus} className="h-5 w-5 p-2" />
      </button>
      <input
        className="w-full appearance-none rounded p-2 font-medium leading-tight focus:outline-none"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo 추가"
      />
    </form>
  );
};

export default TodoAddForm;
