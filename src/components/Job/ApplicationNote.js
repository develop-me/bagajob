import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateAppNote } from '../../data/actions/JobActions/editJobActions'

const ApplicationNote = ({ applicationNote }) => {
    let [editing, setEditing] = useState(true)
    let [note, setNote] = useState(applicationNote.note_data)

    const dispatch = useDispatch()

    const submitNote = e => {
        e.preventDefault()

        let note = {
            id: applicationNote.id,
            note_data: applicationNote.note_data
        }

        dispatch(updateAppNote(note))
    }

    const deleteNote = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={submitNote}>
            <p>{applicationNote.note_date}</p>
            {editing ?
                <textarea
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    id="note"
                    cols="30"
                    rows="10"
                />
                :
                <p>{note}</p>
            }

            {
                editing ?
                    <button onClick={submitNote}>Save</button>
                    :
                    <button onClick={setEditing(true)}>Edit</button>
            }
            <button onClick={() => deleteNote(note.id)}>Delete</button>
        </form>
    );
};

export default ApplicationNote;