import React from 'react'
import { useSelector } from 'react-redux'
import JobDetailsCard from './JobDetailsCard'
import ApplicationCard from './ApplicationCard'
import InterviewCard from './InterviewCard'

const Job = () => {

    // brings in single job fetched from database
    const job = useSelector(state => state.job)

    return (
        <div style={{ display: "flex", width: "70%", margin: "0 auto", justifyContent: "space-between" }}>
            <JobDetailsCard job={job} />
            <ApplicationCard job={job} />
            <InterviewCard job={job} />
        </div>
    );
};

export default Job;