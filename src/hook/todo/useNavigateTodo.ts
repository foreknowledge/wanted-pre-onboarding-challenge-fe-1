import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function useNavigateTodo(): [
  string | null,
  (id: string | null) => void
] {
  const navigate = useNavigate();
  const { todoId } = useParams();

  const navigateTodo = useCallback((id: string | null) => {
    if (id) navigate('/todos/' + id);
    else navigate('/todos');
  }, []);

  return [todoId ?? null, navigateTodo];
}
