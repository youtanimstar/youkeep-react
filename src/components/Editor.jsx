import { useEffect } from "react";
import "../css/editor.css";

const Editor = ({ current, setCurrent, notes, setNotes }) => {
  const handleTitle = (e) => {
    setCurrent((current) => ({ ...current, title: e.target.value }));
    updateContent(current.id);
  };
  const handleDescription = (e) => {
    setCurrent((current) => ({ ...current, description: e.target.value }));
    updateContent(current.id);
  };

  const updateContent = (id) => {
    const content = [...notes];
    let i;
    for (i = 0; i < content.length; i++) {
      if (content[i].id === id) {
        break;
      }
    }
    content[i] = current;
    setNotes(content);
  };
  return (
    <>
      <div className="editor">
        <div className="top">
          <input
            type="text"
            id="title"
            placeholder="Enter your Title"
            value={current.title}
            onChange={handleTitle}
          />
          <button onClick={() => updateContent(current.id)}>Save</button>
        </div>
        <div className="hr"></div>
        <textarea
          name="textarea"
          id="textarea"
          placeholder="Enter your notes"
          value={current.description}
          onChange={handleDescription}
        ></textarea>
      </div>
    </>
  );
};

export default Editor;
