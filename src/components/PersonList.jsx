import { useState } from "react";
import "./PersonList.css";
import User from "./User";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
function PersonList({ data, deleteUser }) {
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <div className="header">
        <h2 style={{ color: "red", fontSize: "30px" }}>
          Population {data.length}
        </h2>
        <span onClick={() => setShow(!show)}>
          {show ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deleteUser={deleteUser} />
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
