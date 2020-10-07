import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateJob } from '../../../data/Jobs/actions'

const JobDetail = ({ label, inputType, jobProperty, value, title, company, active, stage }) => {
    const [jobInputValue, setJobInputValue] = useState(value)
    const [editing, setEditing] = useState(false)
    const user_id = useSelector(state => state.user.user.id)
    const job_id = useSelector(state => state.job.data.data.id)
    const access_token = useSelector(state => state.user.access_token)
    
    const dispatch = useDispatch()

    // dispatches action with updated job detail
    const handleUpdateJob = () => {
        const data = {
            user_id,
            job_id,
            job_data: {
                [jobProperty]: jobInputValue,
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

    const handleUpdateJobTitle = () => {
        const data = {
            user_id,
            job_id,
            job_data: {
                title: jobInputValue,
                company,
                active,
                stage
            },
            access_token
        }
        dispatch(updateJob(data))
        setEditing(false)
    }

    const handleUpdateJobCompany = () => {
        const data = {
            user_id,
            job_id,
            job_data: {
                title,
                company: jobInputValue,
                active,
                stage
            },
            access_token
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

            {/* if not editing, show the Edit button and set editing variable to true onClick */}
            {!editing ?
                <button
                style={{ height: "2rem" }}
                onClick={() => setEditing(true)}
                 >Edit
                </button>
                :
                null
            }

            {/*save button for PATCH request shows for each field except title and company */}
            {editing && jobProperty !== "title" && jobProperty !== "company" ?
                <button
                    style={{ height: "2rem" }}
                    type="submit"
                    onClick={handleUpdateJob}
                >
                    Save
                </button>
                : null
            }

            {/*save button for title PATCH request */}
            {editing && jobProperty === "title" ?
                <button
                    style={{ height: "2rem" }}
                    type="submit"
                    onClick={handleUpdateJobTitle}
                >
                    Save
                </button>
            : null 
            }

            {/*save button for company PATCH request */}
            {editing && jobProperty === "company" ?
                <button
                    style={{ height: "2rem" }}
                    type="submit"
                    onClick={handleUpdateJobCompany}
                >
                    Save
                </button>
            : null 
            }

        </div>
    )
}

export default JobDetail