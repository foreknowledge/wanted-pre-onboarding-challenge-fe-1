import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useTodoId(): [string | null, (id: string) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const todoId = searchParams.get('id');
  const setTodoId = useCallback((id: string) => {
    if (id) setSearchParams(`?id=${id}`);
    else setSearchParams('');
  }, []);

  return [todoId, setTodoId];
}
