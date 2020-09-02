import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateJobDetails } from '../../../data/Jobs/actions'

const JobDetail = ({ job, value, inputType, jobProperty, label }) => {
    const [jobInput, setJobInput] = useState(value)
    const [editing, setEditing] = useState(false)
    const { id: user_id } = useSelector(state => state.auth.user)
    const { id: job_id } = job
    const dispatch = useDispatch()

    // dispatches action with updated job detail
    const handleSave = () => {
        let data = {
            ...job,
            [jobProperty]: jobInput,
        }

        dispatch(updateJobDetails({
            job_id,
            user_id,
            job_data: data
        }))

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
                        value={jobInput}
                        type={inputType}
                        onChange={e => setJobInput(e.target.value)}
                    />
                    :
                    <p>{jobInput}</p>
                }
            </div>
            {editing ?
                <button
                    style={{ height: "2rem" }}
                    type="submit"
                    onClick={() => handleSave()}
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
    );
};

export default JobDetail;