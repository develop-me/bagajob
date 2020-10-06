import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAppNote, deleteAppNote } from '../../../data/AppNotes/actions'
import dateToday from '../../../helpers/dateToday.js'

const ApplicationNote = ({ applicationNote }) => {
    const [editing, setEditing] = useState(false)
    const [note, setNote] = useState(applicationNote.data)
    const dispatch = useDispatch()
    // the necessary ids to make updateAppNote patch request
    const user_id = useSelector(state => state.user.user.id)
    const job_id = useSelector(state => state.job.data.data.id)
    const { id: note_id } = applicationNote
    // access token for Authentication
    const access_token = useSelector(state => state.user.access_token)

    // get today's date for application notes
    let today = dateToday()

    // updates single application card note
    const handleUpdateAppNote = e => {
        e.preventDefault()

        dispatch(updateAppNote({
            user_id,
            job_id,
            note_id,
            note_data: {
                data: note,
                date: today
            },
            access_token
        }))
        setEditing(false)
    }

    // deletes single application card note
    const handleDeleteAppNote = () => {
        dispatch(deleteAppNote({
            user_id,
            job_id,
            note_id,
            access_token
        }))
    }

    return (
        <>

        {!editing ? <button onClick={() => setEditing(true)}>Edit</button> : <button onClick={handleUpdateAppNote}>Done</button>}
        
        {editing ?
                < textarea
                    cols="30"
                    rows="10"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                />
            :
            <p>{note} {applicationNote.date}</p>
        }

        <button onClick={handleDeleteAppNote}>Delete</button>
        </>
    )
}

export default ApplicationNote