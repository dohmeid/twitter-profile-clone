import "./App.css";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Body from "./components/Body/Body";
import RightPanel from "./components/RightPanel/RightPanel";

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <Body />
      <RightPanel />
    </div>
  );
}

export default App;
