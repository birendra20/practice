import "./App.css";
import ConditionalClass from "./component/ConditionalClass";
import FileInput from "./component/FileInput";
import GetElemById from "./component/GetElemById";

function App() {
  return (
    <div className="App">
      <FileInput />
      <ConditionalClass />
      <GetElemById />
    </div>
  );
}

export default App;
