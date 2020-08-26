import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateJobDetails } from '../../../data/actions/JobActions/editJobActions'

const ApplicationInput = ({ appInput, jobProperty, job }) => {
    const [input, setInput] = useState(appInput)
    const [editing, setEditing] = useState(false)

    const dispatch = useDispatch()

    // dispatches action with updated cv or cover letter
    const handleSave = () => {
        let updatedJob = {
            ...job,
            [jobProperty]: input,
        }

        dispatch(updateJobDetails(updatedJob))
        setEditing(false)
    }

    return (
        <div>
            {editing
                ?
                <input id={input} type="text" value={input} onChange={e => setInput(e.target.value)} />
                :
                <p>{jobProperty === "cv" ? "CV:" : "Cover Letter:"} {input === null ? "-" : input}</p>
            }
            {editing
                ?
                <button onClick={() => handleSave()}>Save</button>
                :
                <button onClick={() => setEditing(true)}>Edit</button>
            }
        </div>
    );
};

export default ApplicationInput;