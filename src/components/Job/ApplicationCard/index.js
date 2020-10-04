import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApplicationInput from './ApplicationInput'
import { addAppNote } from '../../../data/AppNotes/actions'
import ApplicationNote from './ApplicationNote'

const ApplicationCard = ({ job }) => {
    const user_id = useSelector(state => state.user.user.id)
    const job_id = useSelector(state => state.job.data.data.id)
    const access_token = useSelector(state => state.user)
    const job_data = job
    const dispatch = useDispatch()

    // console.log("user ID: ")
    // console.log(user_id)
    // console.log("job ID: ")
    // console.log(job_id)

    // adds new empty note in application card
    const handleAddAppNote = () => {
        dispatch(addAppNote({
            user_id,
            job_id
        }))
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
                <h1 className="para_header">Application</h1>
                <ApplicationInput
                    appCardInput={job.cv}
                    jobProperty="cv"
                />
                <ApplicationInput
                    appCardInput={job.cover_letter}
                    jobProperty="cover_letter"
                />
                <h3>Notes</h3>
                <button onClick={handleAddAppNote}>Add note</button>
                {
                    job_data.application_notes.map(note => {
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