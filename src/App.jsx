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

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log("Render Component");
  }, []);

  return (
    <div className={theme}>
      <div className="App">
        <Header title="My Appilcation" theme={theme} setTheme={setTheme} />
        <main>
          <AddForm data={data} setData={setData} />
          <PersonList data={data} deleteUser={deleteUser} />
        </main>
      </div>
    </div>
  );
}

export default App;
