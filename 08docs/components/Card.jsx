import React, { useState, useEffect, useRef } from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { useNotes } from '../context/notesContext'
import '../src/App.css' // import regular CSS

const Card = ({ note }) => {
  const [isNoteEditable, setIsNoteEditable] = useState(false)
  const [notes, setNotes] = useState(note.note)
  const [title,setTitles] = useState(note.tittle)
  const { updateNotes, toggleComplete, deleteNotes } = useNotes()
  const textareaRef = useRef(null)



  useEffect(() => {
    setNotes(note.note)
    setTitles(note.tittle)
  }, [note.note])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      console.log(textareaRef.current.scrollHeight)
    }
  }, [notes])

  const editNote = () => {
    updateNotes(note.id, { ...note, note: notes })
    setIsNoteEditable(false)
  }

  return (
    <div className="card">
      <div className="card-header">
        <FaRegFileAlt size={40} />
        <div>{title}</div>
      </div>

      <textarea
        ref={textareaRef}
        className={`card-textarea ${isNoteEditable ? "editable" : ""}`}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        readOnly={!isNoteEditable}
      />



      <div className="card-buttons">
        <button
          className="btn-update"
          onClick={() => {
            if (note.completed) return
            isNoteEditable ? editNote() : setIsNoteEditable(true)
          }}
          disabled={note.completed}
        >
          {isNoteEditable ? "Update" : "Edit"}
        </button>

        <button
          className="btn-delete"
          onClick={() => deleteNotes(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Card
