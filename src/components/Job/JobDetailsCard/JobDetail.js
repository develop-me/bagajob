import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateJob } from '../../../data/Jobs/actions'

const JobDetail = ({ label, inputType, jobProperty, value }) => {
    const [jobInputValue, setJobInputValue] = useState(value)
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch()
    const { user: { id: user_id }, job: { id: job_id } } = useSelector(state => state)

    // dispatches action with updated job detail
    const handleUpdateJob = () => {
        const data = {
            user_id,
            job_id,
            job_data: {
                [jobProperty]: jobInputValue
            }
        }

        dispatch(updateJob(data))

        setEditing(false)
    }

    return (
        <div className="input-group" style={{ display: "flex" }}>
            <div>
                <label
                    className="label"
                    htmlFor={jobProperty}
                >{label}
                </label>
                {editing ?
                    <input
                        id={jobProperty}
                        value={jobInputValue}
                        type={inputType}
                        onChange={e => setJobInputValue(e.target.value)}
                    />
                    :
                    <p>{jobInputValue}</p>
                }
            </div>
            {editing ?
                <button
                    style={{ height: "2rem" }}
                    type="submit"
                    onClick={handleUpdateJob}
                >Save
                </button>
                :
                <button
                    style={{ height: "2rem" }}
                    onClick={() => setEditing(true)}
                >Edit
                </button>
            }
        </div>
    )
}

export default JobDetail