import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
function PersonList() {
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
    {
      id: 3,
      name: "Jame",
      Gender: "Male",
    },
  ]);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Population {data.length} Peoples</h1>
      <img src={girl} width={50} height={50} />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <img
                src={item.Gender === "Male" ? boy : girl}
                width={50}
                height={50}
              />
              <h3>{item.name}</h3>
            </li>
          ))}
      </ul>
    </>
  );
}

export default PersonList;
