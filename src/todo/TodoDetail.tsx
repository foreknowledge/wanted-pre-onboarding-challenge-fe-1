const TodoDetail = ({ selectedId }: { selectedId: string | null }) => {
  return (
    <div className="m-4">
      <h1>TodoDetail</h1>
      <h1>{selectedId}</h1>
    </div>
  );
};

export default TodoDetail;
