import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateInterview, deleteInterview } from '../../../data/Interviews/actions'

const Interview = ({ interview }) => {

    let [editing, setEditing] = useState(false)
    let [interviewDate, setInterviewDate] = useState(interview.interview_date)
    let [format, setFormat] = useState(interview.format)
    let [interviewer, setInterviewer] = useState(interview.interviewer)
    let [notes, setNotes] = useState(interview.notes)
    // the necessary ids to make updateInterview put and delete requests
    const user_id = useSelector(state => state.user_id)
    const interview_id = interview.id

    // On development branch, data is nested within an extra data object:
    const job_id = useSelector(state => state.job.data.data.id)
    // In current deployment, it is not:
    // const job_id = useSelector(state => state.job.data.id)

    const access_token = useSelector(state => state.access_token)


    const dispatch = useDispatch()

    const handleUpdateInterview = e => {
        e.preventDefault()

        const data = {
            interview_date: interviewDate,
            format,
            interviewer,
            notes
        }

        dispatch(updateInterview({
            user_id,
            job_id,
            interview_id,
            access_token,
            interview_data: { ...data },
        }))

        setEditing(false)
    }

    const handleDeleteInterview = () => {
        dispatch(deleteInterview({
            user_id,
            job_id,
            interview_id,
            access_token
        }))
    }

    return (
        <>
            <form onSubmit={handleUpdateInterview}>
                <label
                    className="label"
                    htmlFor="date"
                >Date: {editing ?
                    <input
                        type="date"
                        id="date"
                        value={interviewDate}
                        onChange={e => setInterviewDate(e.target.value)}
                    />
                    :
                    interviewDate
                    }
                </label>

                <label
                    className="label"
                    htmlFor="format"
                >Format: {editing ?

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
                    :
                    format
                    }
                </label>

                <label
                    className="label"
                    htmlFor="interviewer"
                >Interviewer: {editing ?
                    <input
                        type="text"
                        id="interviewer"
                        value={interviewer}
                        onChange={e => setInterviewer(e.target.value)}
                    />
                    :
                    interviewer
                    }
                </label>

                <label
                    className="label"
                    htmlFor="notes"
                >Notes: {editing ?
                    <textarea
                        cols="30"
                        rows="10"
                        type="text"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                    :
                    notes
                    }
                </label>
                <button type="submit">Save</button>
            </form>
            {!editing && <button onClick={() => setEditing(true)}>Edit</button>}
            <button onClick={handleDeleteInterview}>Delete</button>
        </>
    )
}

export default Interview