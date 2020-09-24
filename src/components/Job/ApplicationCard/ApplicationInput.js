import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateJob } from '../../../data/Jobs/actions'

const ApplicationInput = ({ appCardInput, jobProperty }) => {
    const [inputValue, setInput] = useState(appCardInput)
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch()

    // dispatches action with updated cv or cover letter
    const handleUpdateJob = () => {
        const job_data = {
            [jobProperty]: inputValue
        }

        dispatch(updateJob(job_data))

        setEditing(false)
    }

    return (
        <>
            <label htmlFor={jobProperty}>
                {jobProperty === "cv"
                    ?
                    "CV:"
                    :
                    "Cover Letter:"
                }
            </label>
            {editing
                ?
                <input
                    type="text"
                    id={jobProperty}
                    value={inputValue}
                    onChange={e => setInput(e.target.value)}
                />
                :
                <p>
                    {inputValue === null
                        ?
                        "-"
                        :
                        inputValue
                    }
                </p>
            }
            {editing
                ?
                <button onClick={handleUpdateJob}>Save</button>
                :
                <button onClick={() => setEditing(true)}>Edit</button>
            }
        </>
    )
}

export default ApplicationInput