export default async function DataServer() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
  );
  const todos = await response.json();
  console.log(todos);
  
  return (
    <div>
      Todos List
      <h3>Todos</h3>
      <div className="p-2">
        {todos.map(({ id, completed, title }) => (
          <div className="m-2 space-y-5" key={id}>
            <h1>{title}</h1>
            {/* for the checkbox without readonly give the error  */}
            <input type="checkbox" checked={completed} readOnly />
            <p>{String(completed)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
