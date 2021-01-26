import "./App.css";
import Note from "./components/Note";
import AddNoteButton from './components/AddNoteButton'

function App() {
  return (
    <div id="outer-wrapper">
      <h1>Lambda Notes</h1>
      <AddNoteButton />
      <div id="App-wrapper">
        <Note />
      </div>
    </div>
  );
}

export default App;
