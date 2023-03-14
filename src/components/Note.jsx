import React from "react";





function Note({onDelete, title, content, id}) {
  const handleClick = () => {
    onDelete(id)
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
        <i class="fa-sharp fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default Note;

