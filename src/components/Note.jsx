import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Note = ({ note, notes, setNotes, findHashtags }) => {
  const [isEdited, setisEdited] = useState(false);
  const [editText, setEditText] = useState(note.text);
  const handleEditActive = () => {
    if (isEdited) {
      setNotes([
        ...notes.filter((el) => note.id !== el.id),
        { ...note, text: editText },
      ]);
      setisEdited(!isEdited);
    } else {
      setisEdited(!isEdited);
    }
  };

  const handleEditText = (event) => {
    setEditText(event.target.value);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);
    // findHashtags();
  };

  return (
    <div className="note-wrapper">
      <div className="note-controls">
        <p className="note-date">{new Date(note.date).toLocaleDateString()}</p>
        <div className="btn-block">
          <button className="control-btn" onClick={handleEditActive}>
            {!isEdited ? (
              <FontAwesomeIcon
                className="note-btn edit-btn"
                icon={faPenToSquare}
              />
            ) : (
              <FontAwesomeIcon className="note-btn edit-btn" icon={faCheck} />
            )}
          </button>
          <button className="control-btn">
            <FontAwesomeIcon
              className="note-btn trash-btn"
              icon={faTrashCan}
              onClick={() => {
                deleteNote(note.id);
              }}
            />
          </button>
        </div>
      </div>
      <textarea
        className="note-text"
        disabled={!isEdited}
        value={editText}
        onChange={handleEditText}
      ></textarea>
    </div>
  );
};

export default Note;
