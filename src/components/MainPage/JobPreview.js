import React from 'react';
import { Link } from "react-router-dom";
import StageTracker from './StageTracker';
import { MY_ROUTE } from '../App';

const Job = ({ job }) => {
    return (
        <>
            <div class="job-card-container">
                <div class="job-card-text">
                    <h4 class="para-highlight">
                        {job.jobTitle}
                    </h4>
                    <h4 class="para-header">
                        {job.company}
                    </h4>
                </div>
                <div class="status-bar">
                    <StageTracker active={job.stage === 1} />
                    <StageTracker active={job.stage === 2} />
                    <StageTracker active={job.stage === 3} />
                </div>
                <Link to={MY_ROUTE(job.id)} params={{ jobId: job.id }} className="expand_btn">&#8250;</Link>
            </div>
            <hr class="status-line"></hr>
        </>
    );
};

export default Job;