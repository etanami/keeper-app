import './App.css';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from "./CreateArea";
import { useState } from 'react';


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(preNotes => {
      return [...preNotes, newNote];
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => {
        return <Note 
          title={note.title} content={note.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
