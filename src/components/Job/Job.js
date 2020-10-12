import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleJob, deleteJob } from '../../data/Jobs/actions'
import Loading from '../Loading'
import JobDetailsCard from './JobDetailsCard'
import ApplicationCard from './ApplicationCard'
import InterviewCard from './InterviewCard'
import { Link } from "react-router-dom"
import Nav from '../Nav'

const Job = ({ match }) => {
    const { jobs, job, loaded } = useSelector(state => state)
    const { data: job_data } = job.data
    const user_id = useSelector(state => state.user_id)
    const job_id = match.params.id
    const access_token = useSelector(state => state.access_token)
    const dispatch = useDispatch()

    // single job is fetched when component renders
    useEffect(() => {
        const data = {
            user_id,
            job_id,
            access_token
        }
        dispatch(getSingleJob(data));
    }, []);

    // deletes single job
    const handleDeleteJob = () => {
        dispatch(deleteJob({
            user_id,
            job_id,
            access_token
        }))
    }


    return (
        <>
        <div className="test">
        <Nav />
        { !loaded ?
            <> 
            <Loading /> 
            </>
        : 
        <>
        <div className="single-job-btn-group">
            <Link to="/mainpage"><button className="secondarybtn back-btn">Back</button></Link>
            <button className="primarybtn delete-job-btn" onClick={handleDeleteJob}>Delete Job</button>
        </div>
        <div className="single-job-container" >
            <JobDetailsCard job={job_data} />
            <ApplicationCard job={job_data} />
            <InterviewCard job={job_data} />
        </div>
        </>
        }
        </div>
        </>
    )
}

export default Job