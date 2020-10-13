import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInterview } from '../../../data/Interviews/actions'
import Interview from './Interview'
import dateToday from '../../../helpers/dateToday.js'

const InterviewCard = ({ job }) => {
    let [editing, setEditing] = useState(false)
    let [interviewDate, setInterviewDate] = useState(job.interviews.interview_date)
    let [format, setFormat] = useState(job.interviews.format)
    let [interviewer, setInterviewer] = useState(job.interviews.interviewer)
    let [notes, setNotes] = useState(job.interviews.notes)

    const user_id = useSelector(state => state.user_id)
    const job_id = useSelector(state => state.job.data.data.id)
    const job_data = job
    const access_token = useSelector(state => state.access_token)
    const dispatch = useDispatch()

    // These fields required by API, assigned values in intial state
    let today = dateToday()
    const initialState = {
        interview_date: today,
        format: "in_person",
    }

    const handleAddInterview = e => {
        e.preventDefault()

        // if format is undefined, assign it the value from initial state
        if (!format) {
            format = initialState.format
        }

        // if date is undefined, assign it the value from initial state
        if (!interviewDate) {
            interviewDate = initialState.interview_date
        }

        const data = {
            interview_date: interviewDate,
            format,
            interviewer,
            notes,
        }

        dispatch(addInterview({
            user_id,
            job_id,
            access_token,
            interview_data: { ...data },
        }))

        setEditing(false)
    }

    return (
        <div className="interview-card">
            <h1 className="para-highlight">Interviews</h1>
            { !editing ? 
                <button className="primarybtn add-interview-btn" onClick={() => setEditing(true)}>&#x2b; ADD INTERVIEW</button>
            : null}
            
            
            { editing ?

                <form className="add-interview-form" onSubmit={handleAddInterview}>
                    <button className="primarybtn save-interview-btn" type="submit">SAVE</button>

                    <label
                        className="label"
                        htmlFor="date"
                    >Date:
                    </label>

                    <input
                        type="datetime-local"
                        id="date"
                        value={interviewDate}
                        onChange={e => setInterviewDate(e.target.value)}
                    />

                    <label
                        className="label"
                        htmlFor="format"
                    >Format: 
                    </label>

                    <select
                    id="format"
                    value={format}
                    onChange={e => setFormat(e.target.value)}
                    >
                        <option value="in_person">In person</option>
                        <option value="telephone">Telephone</option>
                        <option value="video_call">Video Call</option>
                        <option value="online_testing">Online Test</option>
                    </select>

                    <label
                        className="label"
                        htmlFor="interviewer"
                    >Interviewer:
                    </label>

                    <input
                        type="text"
                        id="interviewer"
                        value={interviewer}
                        onChange={e => setInterviewer(e.target.value)}
                    />

                    <label
                        className="label"
                        htmlFor="notes"
                    >Notes:
                    </label>

                    <textarea
                        cols="30"
                        rows="5"
                        type="text"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                </form>
            
            : null }

            {/* interviews will not show when user is adding a new interview */}
            { !editing ? 

            <div className="interview-list-container">
                {job_data.interviews.map((interview, i) => {
                    return (
                        <Interview key={i} interview={interview} />
                    )
                })}
            </div>

            : null }

        </div >
    )
}

export default InterviewCard