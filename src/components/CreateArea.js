import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(e) {
    const {name, value} = e.target;
    setNote(preValue => {
      return {
        ...preValue,
        [name] : value
      }
    });
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    e.preventDefault();
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />}
        <textarea onClick={expand} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;