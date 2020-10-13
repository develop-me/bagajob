import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApplicationInput from './ApplicationInput'
import { addAppNote } from '../../../data/AppNotes/actions'
import ApplicationNote from './ApplicationNote'
import dateToday from '../../../helpers/dateToday.js'

const ApplicationCard = ({ job }) => {
    const user_id = useSelector(state => state.user_id)
    const job_id = useSelector(state => state.job.data.data.id)
    const { access_token } = useSelector(state => state)
    const [editing, setEditing] = useState(false)
    const [note, setNote] = useState(job.application_notes.data)

    const dispatch = useDispatch()

    let date = dateToday()

    // adds new empty note in application card
    const handleAddAppNote = () => {
        dispatch(addAppNote({
            user_id,
            job_id,
            access_token,
            notes_data: {
                data: note,
                date: date
            }
        }))
    }

    return (
        <>
            <div className="application-card">
                <h1 className="para-highlight">Application</h1>
                {/* CV */}
                <ApplicationInput
                    appCardInput={job.cv}
                    jobProperty="cv"
                    title={job.title}
                    company={job.company}
                    active={job.active}
                    stage={job.stage}
                />
                {/* Cover Letter */}
                <ApplicationInput
                    appCardInput={job.cover_letter}
                    jobProperty="cover_letter"
                    title={job.title}
                    company={job.company}
                    active={job.active}
                    stage={job.stage}
                />

                <div className="add-appnote-button-container">
                    <h3 className="para-header">Notes</h3>
                    {/* Add a note */}
                    {!editing ? <button className="primarybtn add-note-btn" onClick={() => setEditing(true)}>&#x2b; ADD NOTE</button> : <button className="secondarybtn save-note-btn" onClick={handleAddAppNote}>SAVE</button>}
                </div>

                {editing ?
                <textarea
                    className="add-note-input"
                    cols="30"
                    rows="7"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                />
                :
                null
                }
                {/* Render all app notes */}
                <div className="appnote-list-container">
                {
                    job.application_notes.map(note => {
                        return (
                            <ApplicationNote key={note.id} applicationNote={note} />
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default ApplicationCard