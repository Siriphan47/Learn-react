import Header from "./components/Header";
import PersonList from "./components/PersonList";
import AddForm from "./components/AddForm";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  function deleteUser(id) {
    const result = data.filter((user) => user.id !== id);
    setData(result);
  }

  useEffect(() => {
    console.log("Render Component");
  }, []);

  return (
    <div className="App">
      <Header title="My Appilcation" />
      <main>
        <AddForm data={data} setData={setData} />
        <PersonList data={data} deleteUser={deleteUser} />
      </main>
    </div>
  );
}

export default App;
