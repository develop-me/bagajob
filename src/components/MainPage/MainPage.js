import React from 'react';
import { useSelector } from 'react-redux';
import Job from './Job';

const MainPage = () => {

    // brings in jobs global state property
    const jobs = useSelector(state => state.jobs)

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a>Sort by</a>
                <a>Add new application</a>
                <h1>My Applications</h1>
            </div>

            <div>
                {jobs.map((job, index) => (
                    <Job job={job} key={index}></Job>
                ))}
            </div>
        </>
    );
};

export default MainPage;