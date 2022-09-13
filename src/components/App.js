import './App.css';
import Header from './Header';
import Footer from './Footer';
import notes from '../notes';
import Note from './Note';


function App() {
  return (
    <div>
      <Header />
      {notes.map( note => {
        return(
          <Note
            key={note.id}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
