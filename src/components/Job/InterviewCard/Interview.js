import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateInterview, deleteInterview } from '../../../data/Interviews/actions'

const Interview = ({ interview }) => {
    let [editing, setEditing] = useState(true)
    let [interviewDate, setInterviewDate] = useState(interview.date)
    let [format, setFormat] = useState(interview.format)
    let [interviewer, setInterviewer] = useState(interview.interviewer)
    let [notes, setNotes] = useState(interview.notes)

    const dispatch = useDispatch()

    // the necessary ids to make updateInterview put and delete requests
    const { id: user_id } = useSelector(state => state.auth.user)
    const { id: job_id } = useSelector(state => state.job.job)
    const { id: interview_id } = interview

    const handleInterviewUpdate = e => {
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
            interview_data: { ...data },
        }))
    }

    const handleDelete = () => {
        dispatch(deleteInterview({
            user_id,
            job_id,
            interview_id
        }))
    }

    return (
        <>
            <form onSubmit={handleInterviewUpdate}>
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
                    <input
                        type="text"
                        id="format"
                        value={format}
                        onChange={e => setFormat(e.target.value)}
                    />
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
                        id="notes"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                    :
                    notes
                    }
                </label>

                {editing ?
                    <button type="submit" onClick={() => setEditing(false)}>Save</button>
                    :
                    <button onClick={() => setEditing(true)}>Edit</button>
                }
            </form>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
};

export default Interview;