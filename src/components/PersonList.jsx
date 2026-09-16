import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "./PersonList.css";
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
    <div className="container">
      <div className="header">
        <h2 style={{ color: "red", fontSize: "30px" }}>
          Population {data.length}
        </h2>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <li
              key={item.id}
              style={{
                borderStyle: "solid",
                borderColor: item.Gender === "Male" ? "green" : "pink",
              }}
            >
              <img
                src={item.Gender === "Male" ? boy : girl}
                width={50}
                height={50}
              />
              <p>{item.name}</p>
              <div>
                <button>Delete</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
