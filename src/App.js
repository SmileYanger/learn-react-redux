import logo from "./logo.svg";
import "./App.css";
import Count from "./container/count/count";
import Persons from "./container/persons/Persons";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Count />
        <hr />
        <Persons></Persons>
      </header>
    </div>
  );
}

export default App;
