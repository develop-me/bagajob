import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApplicationInput from './ApplicationInput'
import { addAppNote } from '../../../data/AppNotes/actions'
import ApplicationNote from './ApplicationNote'
import dateToday from '../../../helpers/dateToday.js'

const ApplicationCard = ({ job }) => {
    const user_id = useSelector(state => state.user.user.id)
    const job_id = useSelector(state => state.job.data.data.id)
    const { access_token } = useSelector(state => state.user)
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
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
                <h1 className="para_header">Application</h1>
                {/* CV */}
                <ApplicationInput
                    appCardInput="{job.cv}"
                    jobProperty="cv"
                    title={job.title}
                    company={job.company}
                    active={job.active}
                    stage={job.stage}
                />
                {/* Cover Letter */}
                <ApplicationInput
                    appCardInput="{job.cover_letter}"
                    jobProperty="cover_letter"
                    title={job.title}
                    company={job.company}
                    active={job.active}
                    stage={job.stage}
                />
                {/* Add a new App Note */}
                <h3>Notes</h3>
                {!editing ? <button onClick={() => setEditing(true)}>Add Note</button> : <button onClick={handleAddAppNote}>Done</button>}
                {editing ?
                < textarea
                    cols="30"
                    rows="10"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                />
                :
                null
                }
                {/* Render all app notes */}
                {
                    job.application_notes.map(note => {
                        return (
                            <ApplicationNote key={note.id} applicationNote={note} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ApplicationCard