import Header from "./components/Header";
import PersonList from "./components/PersonList";
import "./App.css";
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
    {
      id: 4,
      name: "Jame",
      Gender: "Male",
    },
  ]);
  return (
    <div className="App">
      <Header title="My Appilcation" />
      <main>
        <PersonList data={data} />
      </main>
    </div>
  );
}

export default App;
