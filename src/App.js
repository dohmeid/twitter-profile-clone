import "./App.css";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <div className="div1">
        <p>this is the center part - not developed yet</p>
      </div>
      <RightPanel />
    </div>
  );
}

export default App;
