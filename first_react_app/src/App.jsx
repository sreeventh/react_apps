import React from "react";
import Header from "./home_components/Header"
import Footer from "./home_components/Footer"
import Note from "./home_components/Note"
import notes_data from "./notes_data"

function display_notes(a){
  return(
    <Note
      title={a.title}
      content={a.content}
    />
  )
}

function App() {
  return (
    <div>
      <Header/>
      {notes_data.map(display_notes)}
      <Footer/>
    </div>
    
  );
}

export default App;