import React, { useState } from 'react'
import { useNotes } from "../context/index"

const NotesForm = () => {
    const [tittle, setTittle] = useState("")
    const [note, setNote] = useState("")
    const { addNotes } = useNotes()

    const add = (e) => {
        e.preventDefault()
        if (!note) return
        addNotes({ note, tittle, completed: false })
        setNote("")
        setTittle("")
    }

    return (
        <div className="form-container">
            <form className="form-box" onSubmit={add}>
                <h1 className="form-title">Manage your Notes</h1>

                <input
                    type="text"
                    placeholder="Write title..."
                    className="form-input"
                    value={tittle}
                    onChange={(e) => setTittle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Write note..."
                    className="form-input"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />

                <button className="form-button" type="submit">Add Note</button>
            </form>
        </div>
    )
}

export default NotesForm
