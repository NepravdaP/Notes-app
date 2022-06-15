import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
const NewNote = ({ notes, setNotes }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [newText, setNewtext] = useState("");
  const handleChange = (event) => {
    setNewtext(event.target.value);
  };

  const saveNote = (text) => {
    const date = Date.now();
    const newNote = {
      id: uuidv4(),
      text: text,
      date: date,
      disabled: true,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const handleSaveText = () => {
    saveNote(newText);
    setNewtext("");
    setIsDisabled(true);
  };
  return isDisabled ? (
    <div className=" plus-wrapper" onClick={() => setIsDisabled(false)}>
      <FontAwesomeIcon className="plus-icon" icon={faPlus} />
    </div>
  ) : (
    <div className="note-wrapper">
      <div className="note-controls">
        <div className="btn-block edit-note">
          <button className="control-btn">
            <FontAwesomeIcon
              className="note-btn edit-btn"
              icon={faCheck}
              onClick={handleSaveText}
            />
          </button>
          <button className="control-btn" onClick={() => setIsDisabled(true)}>
            <FontAwesomeIcon className="note-btn trash-btn" icon={faTrashCan} />
          </button>
        </div>
      </div>
      <textarea
        className="note-text"
        disabled={false}
        value={newText}
        placeholder="Type some text here... "
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default NewNote;
