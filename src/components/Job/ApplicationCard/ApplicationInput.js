import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateJob } from '../../../data/Jobs/actions'

const ApplicationInput = ({ appCardInput, jobProperty }) => {
    const [inputValue, setInput] = useState(appCardInput)
    const [editing, setEditing] = useState(false)
    const access_token = useSelector(state => state.access_token)
    const job_id = useSelector(state => state.job_id)
    const user_id = useSelector(state => state.user_id)
    const dispatch = useDispatch()

    // dispatches action with updated cv or cover letter
    const handleUpdateJob = () => {

        const data = {
            access_token,
            job_id,
            user_id,
            job_data : { [jobProperty]: inputValue }
        }

        dispatch(updateJob(data))

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