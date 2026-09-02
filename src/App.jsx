import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Bill",
      Gender: "Male",
    },
    {
      id: 2,
      name: "Nam",
      Gender: "Female",
    },
    {
      id: 3,
      name: "Alex",
      Gender: "Female",
    },
  ]);

  return (
    <>
      <h1>Population {data.length} Peoples</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} | {item.Gender}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
