import React from 'react';
import StageTracker from './StageTracker';

const Job = ({ job }) => {
    return (
        <>
            <div class="job_card_container">
                <div class="job_card_text">
                    <h4 class="para_highlight">
                        {job.jobTitle}
                    </h4>
                    <h4 class="para_header">
                        {job.company}
                    </h4>
                </div>
                <div class="status_bar">
                    <StageTracker active={job.stage === 1} />
                    <StageTracker active={job.stage === 2} />
                    <StageTracker active={job.stage === 3} />
                </div>
                <a href="#" class="expand_btn">&#8250;</a>

            </div>
            <hr class="status_line"></hr>
        </>
    );
};

export default Job;