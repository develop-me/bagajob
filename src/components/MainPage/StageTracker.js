import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateJob } from '../../data/Jobs/actions'

const StageTracker = ({ job_id, selected, handleClick, label, value, title, company, active }) => {

    const user_id = useSelector(state => state.user_id)
    const access_token = useSelector(state => state.access_token)
    const dispatch = useDispatch()

    const handleUpdateStage = () => {
        const data = {
            user_id,
            job_id,
            job_data: {
                title,
                company,
                active,
                stage: value,
            },
            access_token
        }
        dispatch(updateJob(data))
    }

    let currentStage = selected ? "status-active" : ""

    return (
        <>
            <div onClick={handleClick} style={{ display: "flex", flexDirection: "column" }}>
                <div onClick={handleUpdateStage} className={"status-circle " + currentStage}></div>
                <small>{label}</small>
            </div>
        </>
    );
};

export default StageTracker;