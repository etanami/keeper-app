import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });


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
    e.preventDefault();
    props.onAdd(note);
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;