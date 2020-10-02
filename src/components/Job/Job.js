import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleJob } from '../../data/Jobs/actions'
import Loading from '../Loading'
import JobDetailsCard from './JobDetailsCard'
import ApplicationCard from './ApplicationCard'
import InterviewCard from './InterviewCard'

const Job = ({ match }) => {
    const { job, loaded } = useSelector(state => state)
    const job_data = job.data.data
    const user_id = useSelector(state => state.user_id)
    const job_id = useSelector(state => state.job_id)
    const access_token = useSelector(state => state.access_token)
    const dispatch = useDispatch()

    console.log(job_data)

    // single job is fetched when component renders
    useEffect(() => {
        const data = {
            user_id,
            job_id,
            access_token
        }
        dispatch(getSingleJob(data));
    }, []);


    return (
        <>
        { !loaded ?
            <> 
            <Loading /> 
            </>
        : 
        <>
        <div style={{ display: "flex", width: "70%", margin: "0 auto", justifyContent: "space-between" }}>
            <JobDetailsCard job={job_data} />
            <ApplicationCard job={job_data} />
            <InterviewCard job={job_data} />
        </div>
        </>
        }
        </>
    )
}

export default Job