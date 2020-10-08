import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInterview } from '../../../data/Interviews/actions'
import Interview from './Interview'

const InterviewCard = ({ job }) => {
    let [editing, setEditing] = useState(false)
    let [interviewDate, setInterviewDate] = useState(job.interviews.interview_date)
    let [format, setFormat] = useState(job.interviews.format)
    let [interviewer, setInterviewer] = useState(job.interviews.interviewer)
    let [notes, setNotes] = useState(job.interviews.notes)
    const interview_id = job

    const user_id = useSelector(state => state.user_id)
    const job_id = useSelector(state => state.job.data.data.id)
    const job_data = job
    const access_token = useSelector(state => state.access_token)
    const dispatch = useDispatch()

    console.log(job)

    const handleAddInterview = e => {
        e.preventDefault()

        const data = {
            interview_date: interviewDate,
            format,
            interviewer,
            notes
        }

        dispatch(addInterview({
            user_id,
            job_id,
            interview_id,
            access_token,
            interview_data: { ...data },
        }))

        setEditing(false)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
            <h1 className="para_header">Interviews</h1>
            <button onClick={() => setEditing(true)}>Add interview</button>
            
            { editing ?

                <form onSubmit={handleAddInterview}>
                <label
                    className="label"
                    htmlFor="date"
                >Date:
                    <input
                        type="date"
                        id="date"
                        value={interviewDate}
                        onChange={e => setInterviewDate(e.target.value)}
                    />
                </label>

                <label
                    className="label"
                    htmlFor="format"
                >Format: 

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

                </label>

                <label
                    className="label"
                    htmlFor="interviewer"
                >Interviewer: 
                    <input
                        type="text"
                        id="interviewer"
                        value={interviewer}
                        onChange={e => setInterviewer(e.target.value)}
                    />

                </label>

                <label
                    className="label"
                    htmlFor="notes"
                >Notes:
                    <textarea
                        cols="30"
                        rows="10"
                        type="text"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
            
            : null }




            {job_data.interviews.map((interview, i) => {
                return (
                    <Interview key={i} interview={interview} />
                )
            })}
        </div >
    )
}

export default InterviewCard