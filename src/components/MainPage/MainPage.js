import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import JobPreview from './JobPreview';

const MainPage = () => {

    // brings in jobs global state property
    const jobs = useSelector(state => state.jobs)

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a>Sort by</a>
                <Link to="/addjob">Add new application</Link>
                <h1>My Applications</h1>
            </div>

            <div>
                {jobs.map((job, index) => (
                    job.active ?
                        <JobPreview job={job} key={index}></JobPreview>
                        :
                        null
                ))}
            </div>
        </>
    );
};

export default MainPage;