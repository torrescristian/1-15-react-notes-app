import React, { useState } from 'react';
import Note from './components/Note';
import AddNote from './components/AddNote';

function App() {
  const [notes, setNotes] = useState(['Cristian', 'Tomas', 'Torres']);

  return (
    <div>
      <AddNote />
      <div>
        {notes.reverse().map((note, index) => (
          <Note key={index} content={note} />
        ))}
      </div>
    </div>
  );
}

export default App;
