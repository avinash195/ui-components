import Tabs from "./components/tabs";
import FileExplorer from "./components/file_explorer";
import "./App.css";

import { TabData } from "./data/tabData";
import { FileExporerData } from "./data/fileExplorerData";

function App() {
  return (
    <div className="container">
      <div className={["container-item", "wrapper"].join(" ")}>
        <button>A focusable element</button>
        <Tabs data={TabData} />
        <button>Some other focusable element</button>
      </div>
      <div className="container-item">
        <FileExplorer data={FileExporerData} />
      </div>
    </div>
    
  )
}

export default App
