import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getSingleJob } from '../../data/actions/JobActions/viewJobActions'

const LoadingJob = (props) => {
    console.log(props)
    const { job_id } = props.computedMatch.params

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleJob(job_id));
    }, []);

    const jobLoaded = useSelector(state => state.jobLoaded)

    const { children } = props

    return jobLoaded ? children : (
        <div className="loader">Loading</div>
    );
};

export default LoadingJob;