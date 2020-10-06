import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateJob } from '../../../data/Jobs/actions'

const ApplicationInput = ({ appCardInput, jobProperty, title, company, active, stage }) => {
    const [inputValue, setInput] = useState(appCardInput)
    const [editing, setEditing] = useState(false)
    const user_id = useSelector(state => state.user.user.id)
    const job_id = useSelector(state => state.job.data.data.id)
    const access_token = useSelector(state => state.user.access_token)
    const dispatch = useDispatch()

    // dispatches action with updated cv or cover letter
    const handleUpdateJob = () => {
        const data = {
            user_id,
            job_id,
            job_data: {
                [jobProperty]: inputValue,
                title,
                company,
                active,
                stage
            },
            access_token
        }
        dispatch(updateJob(data))
        setEditing(false)
    }

    console.log(inputValue)

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