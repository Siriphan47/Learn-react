import Header from "./components/Header";
import PersonList from "./components/PersonList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="My Appilcation" />
      <main>
        <PersonList />
      </main>
    </div>
  );
}

export default App;
