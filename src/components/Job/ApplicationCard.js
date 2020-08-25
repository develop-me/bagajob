import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewAppNote } from '../../data/actions/JobActions/editJobActions'
import ApplicationNote from './ApplicationNote'

const ApplicationCard = ({ job }) => {
    const dispatch = useDispatch()

    const addNote = () => {
        dispatch(addNewAppNote())
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
            <h1 className="para_header">Application</h1>
            <p>CV:</p>
            <p>Cover letter:</p>
            <button onClick={addNote}>Add note</button>
            {
                job.application_notes.map(note => {
                    return (
                        <ApplicationNote key={note.id} applicationNote={note} />
                    )
                })
            }
        </div>
    );
};

export default ApplicationCard;