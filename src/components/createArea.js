import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [clicked,setclicked]=useState(false);
  const [notes, setnotes] = useState([
    {
      title: "",
      content: ""
    }
  ]);

  function handelchange(event) {
    const { name, value } = event.target;
    setnotes((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
    
  }
  
  function submitnote(event) {
    props.additem(notes);

    event.preventDefault();
    setnotes({
      title: "",
      content: ""
    });
  }
  function handleclick(){
    setclicked(true)
  }

  return (
    <div>
      <form className="create-note" onClick={handleclick}>
        <input
          value={notes.title}
          onChange={handelchange}
          name="title"
          placeholder="Title"
          onClick={handleclick}
          hidden={!clicked}
          
        />
        <textarea

          value={notes.content}
          onChange={handelchange}
          name="content"
          placeholder="Take a note..."
          rows={clicked?3:1}
        />
        <Zoom in={clicked}>
        <Fab onClick={submitnote}> <AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
