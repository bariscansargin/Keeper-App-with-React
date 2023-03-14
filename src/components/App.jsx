import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([])

  const addNote = (newNote) => {
    setNoteList((prevNoteList) => {
      return [...prevNoteList, newNote];
    })
  }

  const deleteItem = (id) => {
    setNoteList(prevNoteList => {
      return prevNoteList.filter((noteItem, index) => {
        return index !== id;
      })
    })

  }

  return (
    <div>
      <Header/>
      <CreateArea
        onAdd={addNote} />
      {noteList.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteItem} />
      })}

      <Footer />
    </div>
  );
}

export default App;
