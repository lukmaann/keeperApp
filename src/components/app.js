import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function CreateNote(note){
//   return (
//    <Note title={note.title} content={note.content} />
//   );
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map(note=>(<Note title={note.title} content={note.content} />))}
      <Footer />
    </div>
  );
}

export default App;
