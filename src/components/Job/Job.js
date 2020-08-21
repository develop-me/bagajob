import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import JobDetailsCard from './JobDetailsCard'

const Job = (props) => {
    const { jobId: id } = props.match.params

    // brings in single job fetched from database
    const job = useSelector(state => state.job)

    useEffect(() => {
        // dispatch(getSingleJob(id));
    }, []);

    return (
        <>
            <JobDetailsCard job={job} />
        </>
    );
};

export default Job;