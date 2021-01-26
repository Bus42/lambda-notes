import "./App.css";
import Note from "./components/note";

function App() {
  return (
    <div id="outer-wrapper">
      <h1>Note Taker</h1>
      <div id="App-wrapper">
        <Note />
      </div>
    </div>
  );
}

export default App;
