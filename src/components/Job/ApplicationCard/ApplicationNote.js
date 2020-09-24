import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAppNote, deleteAppNote } from '../../../data/AppNotes/actions'

const ApplicationNote = ({ applicationNote }) => {
    const [editing, setEditing] = useState(true)
    const [note, setNote] = useState(applicationNote.data)
    const dispatch = useDispatch()
    // the necessary ids to make updateAppNote patch request
    const { id: user_id } = useSelector(state => state.user)
    const { id: job_id } = useSelector(state => state.job)
    const { id: note_id } = applicationNote

    // updates single application card note
    const handleUpdateAppNote = e => {
        e.preventDefault()

        dispatch(updateAppNote({
            user_id,
            job_id,
            note_id,
            note_data: note
        }))
    }

    // deletes single application card note
    const handleDeleteAppNote = () => {
        dispatch(deleteAppNote({
            user_id,
            job_id,
            note_id
        }))
    }

    return (
        <>
            {editing ?
                <form onSubmit={handleUpdateAppNote}>
                    < textarea
                        cols="30"
                        rows="10"
                        value={note}
                        onChange={e => setNote(e.target.value)}
                    />
                    <button type="submit" onClick={setEditing(false)}>Save</button>
                </form >
                :
                <p>{note} {applicationNote.date}</p>
            }
            {!editing && <button onClick={() => setEditing(true)}>Edit</button>}
            <button onClick={handleDeleteAppNote}>Delete</button>
        </>
    )
}

export default ApplicationNote