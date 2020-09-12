// @ts-check
import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import AddNote from './components/AddNote';
import { nanoid } from 'nanoid';
import store from 'store';
import styled from 'styled-components';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(function getInitialNotes() {
    setNotes(store.get('notes') || []);
  }, []);

  const updateLocalStorage = (newNotes) => {
    store.set('notes', newNotes);
  };

  const handleDelete = (id) => {
    console.log({ delete: id });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    updateLocalStorage(newNotes);
  };

  const handleUpdate = (note) => {
    console.log({ update: note });
    const newNotes = notes.map((n) => (n.id === note.id ? note : n));
    setNotes(newNotes);
    updateLocalStorage(newNotes);
  };

  const handleAdd = (value) => {
    const newNotes = [
      {
        id: nanoid(),
        message: value,
      },
      ...notes,
    ];
    setNotes(newNotes);
    updateLocalStorage(newNotes);
  };

  const Div = styled.div`
    @media (min-width: 600px) {
      .notes-container {
        display: flex;
        flex-wrap: wrap;
      }
    }
  `;

  return (
    <Div>
      <AddNote onCreate={handleAdd} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={note.id}
            id={note.id}
            content={note.message}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </Div>
  );
}

export default App;
