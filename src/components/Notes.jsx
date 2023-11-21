import "../css/notes.css";
import "../css/dropdown.css";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { useEffect, useState, useRef } from "react";

const Notes = ({ setNotes, item, notes, setCurrent }) => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current !== e.target) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  const deleteNote = () => {
    setNotes(
      notes.filter((ele) => {
        return ele.id !== item.id;
      })
    );
    setOpen(false);
  };

  const insertTitle = (title) => {
    if (title === "") {
      item.title = "New Note";
    } else {
      return title;
    }
  };

  const loadNote = (index) => {
    let note;
    note = notes.find((ele) => ele.id === index);
    setCurrent(note);
  };

  return (
    <>
      <div className="wrapper">
        <div className="notes">
          <input
            type="text"
            className="notes-title"
            disabled
            placeholder="Title.."
            value={insertTitle(item.title)}
          />
          <div className="dropdown-button" onClick={() => setOpen(!open)}>
            <PiDotsThreeOutlineVerticalBold className="dropdown" />
          </div>
          <ul
            className={`dropdown-menu ${open ? "active" : "inactive"}`}
            ref={menuRef}
          >
            <li className="dropdown-items" onClick={() => loadNote(item.id)}>
              Load
            </li>
            <li className="dropdown-items" onClick={() => deleteNote()}>
              Delete
            </li>
            <li className="dropdown-items">Rename</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Notes;
