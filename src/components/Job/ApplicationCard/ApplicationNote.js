import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateAppNote, deleteAppNote } from '../../../data/AppNotes/actions'

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

    const handleDelete = note_id => {
        dispatch(deleteAppNote(note_id))
    }

    return (
        <form onSubmit={e => submitNote(e)}>
            {
                editing ?
                    <textarea
                        value={note}
                        onChange={e => setNote(e.target.value)
                        }
                        id="note"
                        cols="30"
                        rows="10"
                    />
                    :
                    <p>{note} {applicationNote.note_date}</p>
            }

            {
                editing ?
                    <button type="submit" onClick={() => setEditing(false)}>Save</button>
                    :
                    <button onClick={() => setEditing(true)}>Edit</button>
            }
            <button onClick={() => handleDelete(note.id)}>Delete</button>
        </form >
    );
};

export default ApplicationNote;