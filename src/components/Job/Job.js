import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleJob } from '../../data/Jobs/actions'
import Loading from '../Loading'
import JobDetailsCard from './JobDetailsCard'
import ApplicationCard from './ApplicationCard'
import InterviewCard from './InterviewCard'

const Job = ({ jobId }) => {
    // brings in single job fetched from database
    const { job, loaded } = useSelector(state => state)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleJob(jobId));
    }, []);

    return !loaded ? <Loading /> : (
        <div style={{ display: "flex", width: "70%", margin: "0 auto", justifyContent: "space-between" }}>
            <JobDetailsCard job={job} />
            <ApplicationCard job={job} />
            <InterviewCard job={job} />
        </div>
    )
};

export default Job;