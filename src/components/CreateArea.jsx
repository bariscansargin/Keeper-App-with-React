import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }
  const submitNote = (event) => {
    onAdd(note)
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault()

  }
  return (
    <div>
      <form className="create-note">
        <input name="title" value={note.title} placeholder="Title" onChange={handleChange} />
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button onClick={submitNote}><i class="fa-sharp fa-solid fa-plus"></i></button>
      </form>
    </div>
  );
}

export default CreateArea;
