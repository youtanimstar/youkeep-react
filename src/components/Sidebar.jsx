import "../css/sidebar.css";
import { FaPlus, FaPlusCircle, FaSearch } from "react-icons/fa";
import Notes from "./Notes";
import { useEffect, useState } from "react";

const Sidebar = ({ setNotes, notes, noteEle, setCurrent }) => {
  const [search, setSearch] = useState("");
  const findNote = (e) => {
    let notesTitle = [
      ...notes.map((ele, index) => {
        return ele.title;
      }),
    ];
    for (let i = 0; i < notesTitle.length; i++) {
      let match = notesTitle[i].toUpperCase();
      let value = e.target.value.toUpperCase();
      if (match.indexOf(value) > -1) {
        console.log(match);
      }
    }
  };
  const addNote = (index) => {
    noteEle.id = index;
    setNotes((current) => [...current, noteEle]);
  };

  return (
    <>
      <div className="sidebar">
        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            // onChange={findNote()}
          />
          <div className="plus-box" onClick={() => addNote(Date.now())}>
            <FaPlus className="plus" />
          </div>
        </div>
        <div className="notes-section">
          {notes.map((item, index) => (
            <Notes
              key={index}
              item={item}
              setNotes={setNotes}
              notes={notes}
              setCurrent={setCurrent}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
