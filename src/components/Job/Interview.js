import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveInterview } from '../../data/actions/JobActions/editJobActions';

const Interview = ({ interview }) => {
    let [editing, setEditing] = useState(true)
    let [interviewDate, setInterviewDate] = useState(interview.date)
    let [format, setFormat] = useState(interview.format)
    let [interviewer, setInterviewer] = useState(interview.interviewer)
    let [notes, setNotes] = useState(interview.notes)

    const dispatch = useDispatch()

    const handleSave = e => {
        e.preventDefault()

        const interview = {
            interviewDate: interviewDate,
            format: format,
            interviewer: interviewer,
            notes: notes
        }

        dispatch(saveInterview(interview))

        setEditing(false)
    }

    return (
        <>
            <form onSubmit={saveInterview}>
                <label
                    className="label"
                    htmlFor="date"
                >Date: {editing ?
                    <input onChange={e => setInterviewDate(e.target.value)} value={interviewDate} type="date" name="" id="date" />
                    :
                    interviewDate
                    }</label>

                <label
                    className="label"
                    htmlFor="format"
                >Format: {editing ?
                    <input onChange={e => setFormat(e.target.value)} value={format} type="text" name="" id="format" />
                    :
                    format
                    }</label>

                <label
                    className="label"
                    htmlFor="interviewer"
                >Interviewer: {editing ?
                    <input onChange={e => setInterviewer(e.target.value)} value={interviewer} type="text" name="" id="interviewer" />
                    :
                    interviewer
                    }</label>

                <label
                    className="label"
                    htmlFor="notes"
                >Notes: {editing ?
                    <textarea onChange={e => setNotes(e.target.value)} value={notes} type="text" name="" id="notes" />
                    :
                    notes
                    }</label>

                {editing ?
                    <button onSubmit={saveInterview}>Save</button>
                    :
                    <button onClick={() => setEditing(true)}>Edit</button>
                }
            </form>
        </>
    );
};

export default Interview;