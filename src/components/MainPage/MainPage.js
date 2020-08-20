import React from 'react';
import { useSelector } from 'react-redux';
import JobPreview from './JobPreview';

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
                    <JobPreview job={job} key={index}></JobPreview>
                ))}
            </div>
        </>
    );
};

export default MainPage;