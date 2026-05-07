async function fetchUrl(url) {
  const response = await fetch(url);
  return await response.json();
}

export default async function Todos() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    "https://procodrr.vercel.app/?sleep=2000",
    "https://procodrr.vercel.app/?sleep=2000",
  ];
  const [todos, d1, d2] = await Promise.all(urls.map((url) => fetchUrl(url)));

  return (
    <div>
      <h1>Todos</h1>
      <div className="p-2">
        {todos.map(({ id, completed, title }) => (
          <div className="m-2 space-y-5" key={id}>
            <h1>{title}</h1>
            {/* for the checkbox without readonly give the error  */}
            <input type="checkbox" checked={completed} readOnly />
            {/* <p>{String(completed)}</p> */}
          </div>
        ))}
      </div>
      <div>{JSON.stringify(d1)}</div>

      <div>{JSON.stringify(d2)}</div>
    </div>
  );
}

//     const slowresponse = await fetch("https://procodrr.vercel.app/?sleep=2000")
//     const data = await slowresponse.json()

//     const slowresponse1 = await fetch("https://procodrr.vercel.app/?sleep=4000")
//     const data1 = await slowresponse1.json()

//      const slowresponse2 = await fetch("https://procodrr.vercel.app/?sleep=3000")
//     const data2 = await slowresponse2.json()

//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/todos?_limit=10",
//   );
//   const todos = await response.json();
//   console.log(todos);
