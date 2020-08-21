import React from 'react';
import StageTracker from './StageTracker';

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
                <a href="#" class="expand-btn">&#8250;</a>

            </div>
            <hr class="status-line"></hr>
        </>
    );
};

export default Job;