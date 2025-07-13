import { useEffect, useState } from "react"
import { NotesProvider } from "../context/notesContext"
import NotesForm from "../components/NotesForm"
import Card from "../components/Card"
import './App.css'; 
import Masonry from 'react-masonry-css'

function App() {
  const [notes, setNotes] = useState([])
  const [titles,setTitles] = useState([])
  const breakpoints = {
    default: 3,
    1024: 2,
    640: 1
  }

  const addNotes = (note,title) => {
    setNotes((prev) => [{ id: Date.now(), completed: false, ...note,...title }, ...prev])
  }
  

  const updateNotes = (id, updatedNote) => {
    setNotes((prev) => prev.map((prevNote) => (prevNote.id === id ? updatedNote : prevNote)))
  }

  const deleteNotes = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  const toggleComplete = (id) => {
    setNotes((prev) => prev.map((prevNote) => prevNote.id === id ? { ...prevNote, completed: !prevNote.completed } : prevNote))
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"))
    const titles = JSON.parse(localStorage.getItem("titles"))
    if (notes && notes.length > 0) {
      setNotes(notes)
      setTitles(titles)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
    localStorage.setItem("titles",JSON.stringify(titles))
  }, [notes]);

  return (
    <div className="app-container">
      <h1 className="main-title">Notes.</h1>

      <NotesProvider value={{ notes, addNotes, updateNotes, deleteNotes, toggleComplete,titles }}>
        <NotesForm />
         <Masonry
          breakpointCols={breakpoints}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {notes.map(note => (
            <Card note={note} key={note.id} />
          ))}
        </Masonry>
      </NotesProvider>
    </div>
  )
}

export default App
