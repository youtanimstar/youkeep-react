import SplitPane from "react-split-pane";
import "./css/index.css";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  const noteEle = {
    id: "",
    title: "",
    description: "",
    visible: true,
  };
  const [current, setCurrent] = useState(noteEle);
  return (
    <>
      <div className="container">
        <SplitPane split="vertical" minSize={100} maxSize={500}>
          <div className="left">
            <Sidebar
              setNotes={setNotes}
              notes={notes}
              noteEle={noteEle}
              setCurrent={setCurrent}
            />
          </div>
          <div className="right">
            <Editor
              current={current}
              setCurrent={setCurrent}
              notes={notes}
              setNotes={setNotes}
            />
          </div>
        </SplitPane>
      </div>
    </>
  );
}

export default App;
