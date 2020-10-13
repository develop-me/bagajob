import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAppNote, deleteAppNote } from '../../../data/AppNotes/actions'
import dateToday from '../../../helpers/dateToday.js'
import trash from '../../../assets/images/delete.svg'
import edit from '../../../assets/images/edit.svg'

const ApplicationNote = ({ applicationNote }) => {
    const [editing, setEditing] = useState(false)
    const [note, setNote] = useState(applicationNote.data)
    const dispatch = useDispatch()
    // the necessary ids to make updateAppNote patch request
    const job_id = useSelector(state => state.job.data.data.id)
    const { id: note_id } = applicationNote
    const user_id = useSelector(state => state.user_id)
    // access token for Authentication
    const access_token = useSelector(state => state.access_token)

    // get today's date for application notes
    let today = dateToday()

    // updates single application card note
    const handleUpdateAppNote = e => {
        e.preventDefault()

        const data = {
            user_id,
            job_id,
            note_id,
            note_data: {
                data: note,
                date: today
            },
            access_token
        }
        dispatch(updateAppNote(data))
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
        <div className="appnote-container">
            <div className="edit-note-button-container">
                <p className="app-note-date">{applicationNote.date}</p>
                <div className="edit-note-btn-group">

                    {!editing ?
                        <button className="primarybtn edit-interview-btn" onClick={() => setEditing(true)}>
                            <img className="edit-icon filter-white" src={edit} alt="edit interview"></img>
                        </button>
                        :
                        <button className="secondarybtn edit-note-btn" onClick={handleUpdateAppNote}>Save</button>
                    }

                    <button className="primarybtn delete-note-btn" onClick={handleDeleteAppNote}>
                        <img className="delete-icon filter-white" src={trash} alt="delete interview"></img>
                    </button>

                </div>
            </div>
            {editing ?
                <textarea
                    className="add-note-input"
                    cols="30"
                    rows="5"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                />
                :
                <>
                <p>{note}</p>
                </>
            }
        </div>
        </>
    )
}

export default ApplicationNote