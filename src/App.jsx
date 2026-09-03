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

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Population {data.length} Peoples</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              {item.name} | {item.Gender}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
