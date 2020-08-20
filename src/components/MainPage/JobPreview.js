import React from 'react';
import StageTracker from './StageTracker';

const Job = ({ job }) => {

    return (
        <div style={{ display: "flex", width: "40rem", justifyContent: "space-between" }}>
            <div>
                <div>{job.name}</div>
                <div>{job.company}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "15rem" }}>
                <StageTracker active={job.stage === 1} />
                <StageTracker active={job.stage === 2} />
                <StageTracker active={job.stage === 3} />
            </div>
            <a>Go to job</a>
        </div>
    );
};

export default Job;