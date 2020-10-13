import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateJob } from '../../../data/Jobs/actions'
import trash from '../../../assets/images/delete.svg'
import edit from '../../../assets/images/edit.svg'

const ApplicationInput = ({ appCardInput, jobProperty, title, company, active, stage }) => {
    const [inputValue, setInput] = useState(appCardInput)
    const [editing, setEditing] = useState(false)
    const job_id = useSelector(state => state.job.data.data.id)
    const user_id = useSelector(state => state.user_id)
    const access_token = useSelector(state => state.access_token)
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

    return (
        <>
            <label className="label" htmlFor={jobProperty}>
                {jobProperty === "cv"
                    ?
                    "CV"
                    :
                    "Cover Letter"
                }
            </label>
            <div className="single-job-input-group">
            {editing
                ?
                <input
                    type="text"
                    id={jobProperty}
                    value={inputValue}
                    className="single-job-input"
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
                <button className="secondarybtn save-btn" onClick={handleUpdateJob}>Save</button>
                :
                <button className="primarybtn edit-btn" onClick={() => setEditing(true)}><img className="edit-icon filter-white" src={edit} alt="edit interview"></img></button>
            }
            </div>
        </>
    )
}

export default ApplicationInput