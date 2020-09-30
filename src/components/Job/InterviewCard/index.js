import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInterview } from '../../../data/Interviews/actions'
import Interview from './Interview'

const InterviewCard = ({ job }) => {
    const user_id = useSelector(state => state.user_id)
    const job_id = useSelector(state => state.job_id)
    const job_data = job.data
    const dispatch = useDispatch()

    console.log(job)

    const handleAddInterview = () => {
        dispatch(addInterview({
            user_id,
            job_id
        }))
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
            <h1 className="para_header">Interviews</h1>
            <button onClick={handleAddInterview}>Add interview</button>
            {job_data.interviews.map((interview, i) => {
                return (
                    <Interview key={i} interview={interview} />
                )
            })}
        </div >
    )
}

export default InterviewCard