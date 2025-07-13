import { createContext, useContext } from "react"

export const notesContext = createContext({
    notes:[
        {
            id:1,
            tittle:"notes tittl",
            note:"note",
            completed:false
        }
    ],
    addNotes: (note,tittl) =>{},
    updateNotes : (id,note) =>{},
    deleteNotes : (note) =>{},
    toggleComplete :(id) => {}
})

export const useNotes = () => {
    return useContext(notesContext)
}
export const NotesProvider = notesContext.Provider