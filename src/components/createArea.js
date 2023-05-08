import React, { useState } from "react";

function CreateArea(props) {
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

  return (
    <div>
      <form>
        <input
          value={notes.title}
          onChange={handelchange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={notes.content}
          onChange={handelchange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
