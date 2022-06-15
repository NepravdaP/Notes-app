import React from "react";
import NewNote from "./NewNote";
import Note from "./Note";

const NoteLIst = ({ notes, setNotes, findHashtags, selectedTags }) => {
  return (
    <div className="note-list-wrapper">
      {notes
        .filter((note) => {
          const hashTags = note.text.match(/#[a-z]+/gi);
          return selectedTags.length > 0
            ? selectedTags?.filter((el) => !!hashTags?.includes(el))?.length > 0
            : true;
        })
        .map((el) => (
          <Note note={el} key={el.id} notes={notes} setNotes={setNotes} />
        ))}
      {selectedTags.length === 0 && (
        <NewNote notes={notes} setNotes={setNotes} />
      )}
    </div>
  );
};

export default NoteLIst;
