import React, { useState } from 'react'
import { Link } from "react-router-dom"
import StageTracker from './StageTracker'

const JobPreview = ({ job }) => {
    const [active, setActive] = useState(1)

    return (
        <>
            <div className="job-card-container">
                <div className="job-card-text">
                    <h4 className="para-highlight">
                        {job.jobTitle}
                    </h4>
                    <h4 className="para-header">
                        {job.company}
                    </h4>
                </div>
                <div className="status-bar">
                    <StageTracker
                        handleClick={() => setActive(1)}
                        selected={active === 1}
                        label="Not applied"
                    />
                    <StageTracker
                        handleClick={() => setActive(2)}
                        selected={active === 2}
                        label="Applied"
                    />
                    <StageTracker
                        handleClick={() => setActive(3)}
                        selected={active === 3}
                        label="Interview"
                    />
                    <StageTracker
                        handleClick={() => setActive(4)}
                        selected={active === 4}
                        label="Offer"
                    />
                </div>
                <Link to={`/jobs/${job.id}`} className="expand_btn">&#8250;</Link>
            </div>
            <hr className="status-line"></hr>
        </>
    );
};

export default JobPreview;