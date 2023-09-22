import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";
import { useState } from "react";

function App() {
  const [notes, setnotes] = useState([]);
  function addnote(note) {
    setnotes((prev) => {
      return [...prev, note];
    });
  }
  function del(id) {
    setnotes((prev) => {
      return prev.filter((value, idx) => {
        return id !== idx;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea additem={addnote} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            deleteitem={del}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
