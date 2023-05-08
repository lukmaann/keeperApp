import React from "react";

function Note(props) {
  function handleclick() {
    props.deleteitem(props.id);
  }
  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleclick}>DELETE</button>
    </div>
  );
}

export default Note;
