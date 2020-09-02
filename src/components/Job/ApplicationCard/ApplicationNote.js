import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAppNote, deleteAppNote } from '../../../data/AppNotes/actions'

const ApplicationNote = ({ applicationNote }) => {
    let [editing, setEditing] = useState(true)
    let [note, setNote] = useState(applicationNote.note_data)

    const dispatch = useDispatch()
    // the necessary ids to make updateAppNote patch request
    const { id: user_id } = useSelector(state => state.auth.user)
    const { id: job_id } = useSelector(state => state.job.job)
    const { id: note_id } = applicationNote

    // updates single application card note
    const handleUpdate = e => {
        e.preventDefault()

        dispatch(updateAppNote({
            user_id,
            job_id,
            note_id,
            note_data: note
        }))
    }

    // deletes single application card note
    const handleDelete = () => {
        dispatch(deleteAppNote({
            user_id,
            job_id,
            note_id
        }))
    }

    return (
        <form onSubmit={handleUpdate}>
            {editing ?
                <textarea
                    cols="30"
                    rows="10"
                    id="note"
                    value={note}
                    onChange={e => setNote(e.target.value)
                    }
                />
                :
                <p>{note} {applicationNote.note_date}</p>
            }

            {editing ?
                <button type="submit" onClick={() => setEditing(false)}>Save</button>
                :
                <button onClick={() => setEditing(true)}>Edit</button>
            }
            <button onClick={handleDelete}>Delete</button>
        </form >
    );
};

export default ApplicationNote;