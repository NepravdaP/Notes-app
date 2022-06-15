import { useEffect } from "react";
import { useState } from "react";
import NoteLIst from "./components/NoteLIst";
import TagList from "./components/TagList";

function App() {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const refreshTagList = () => {
    const hashTags =
      notes
        ?.map((note) => {
          const hashTags = note.text.match(/#[a-z]+/gi);
          return hashTags;
        })
        ?.flat(Infinity)
        ?.filter((tag) => !!tag)
        ?.filter((value, index, self) => self.indexOf(value) === index) || [];
    setTags(hashTags);
  };
  const findHashtags = () => {
    const hashTags =
      notes
        ?.map((note) => {
          const hashTags = note.text.match(/#[a-z]+/gi);
          return hashTags?.length > 0
            ? hashTags.filter((ht) => !tags.includes(ht))
            : [];
        })
        ?.flat(Infinity)
        ?.filter((tag) => !!tag)
        ?.filter((value, index, self) => self.indexOf(value) === index) || [];

    setTags([...tags, ...hashTags]);
  };
  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("localNotes"));
    if (localNotes && localNotes.length !== 0) {
      setNotes(localNotes);
    }
  }, []);
  useEffect(() => {
    if (notes.length >= 0) {
      localStorage.setItem("localNotes", JSON.stringify(notes));

      findHashtags();
      refreshTagList();
    }
  }, [notes]);

  useEffect(() => {}, [selectedTags]);

  return (
    <div className="App">
      <header>
        <h1>Notes</h1>
      </header>
      <main>
        <NoteLIst
          notes={notes.sort((a, b) => {
            return a.date - b.date;
          })}
          setNotes={setNotes}
          selectedTags={selectedTags}
        />
        <TagList
          tags={tags}
          setTags={setTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </main>
    </div>
  );
}

export default App;
