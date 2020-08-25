import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewInterview } from '../../data/actions/JobActions/editJobActions'
import Interview from './Interview'

const InterviewCard = ({ job }) => {
    const dispatch = useDispatch()

    const addInterview = () => {
        dispatch(addNewInterview())
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
            <h1 className="para_header">Interviews</h1>
            <button onClick={addInterview}>Add interview</button>

            {job.interviews.map((interview, i) => {
                return (
                    <Interview key={i} interview={interview} />
                )
            })}
        </div >
    );
};

export default InterviewCard;