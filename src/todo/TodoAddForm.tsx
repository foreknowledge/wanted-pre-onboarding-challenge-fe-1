import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const TodoAddForm = () => {
  const [title, setTitle] = useState('');

  return (
    <form className="m-4 flex items-center rounded border-2 border-purple-500 bg-white p-2">
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
