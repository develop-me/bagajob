import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleJob } from '../../data/Jobs/actions'
import Loading from '../Loading'
import JobDetailsCard from './JobDetailsCard'
import ApplicationCard from './ApplicationCard'
import InterviewCard from './InterviewCard'

const Job = ({ match }) => {
    const { job, loaded, user: { id: user_id } } = useSelector(state => state)
    const dispatch = useDispatch()
    const job_id = match.params.id

    // single job is fetched when component renders
    useEffect(() => {
        const data = {
            user_id,
            job_id
        }
        dispatch(getSingleJob(data));
    }, []);

    return !loaded ? <Loading /> : (
        <div style={{ display: "flex", width: "70%", margin: "0 auto", justifyContent: "space-between" }}>
            <JobDetailsCard job={job} />
            <ApplicationCard job={job} />
            <InterviewCard job={job} />
        </div>
    )
}

export default Job