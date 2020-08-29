import React, { useState } from 'react';
import Note from './components/Note';
import AddNote from './components/AddNote';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    { id: nanoid(), message: 'Cristian' },
    { id: nanoid(), message: 'Tomas' },
    { id: nanoid(), message: 'Torres' },
  ]);

  const handleDelete = (id) => {
    console.log({ delete: id });
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <AddNote />
      <div>
        {notes.reverse().map((note, index) => (
          <Note
            key={note.id}
            id={note.id}
            content={note.message}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
