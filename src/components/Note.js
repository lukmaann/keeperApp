import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from "@mui/material";


function Note(props) {
  function handleclick() {
    props.deleteitem(props.id);
  }
  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleclick}> <DeleteIcon /></Fab>
    </div>
  );
}

export default Note;
