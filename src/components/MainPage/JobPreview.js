import React, { useState } from 'react'
import { Link } from "react-router-dom"
import StageTracker from './StageTracker'

const JobPreview = ({ job }) => {
    
    const {
        title,
        company,
        active,
        stage,
    } = job 

    const [current, setCurrent] = useState(stage)

    return (
        <>
            <div className="job-card-container">
                <div className="job-card-text">
                    <h4 className="para-highlight">
                        {job.title}
                    </h4>
                    <h4 className="para-header">
                        {job.company}
                    </h4>
                </div>
                <div className="status-bar">
                    <StageTracker
                        handleClick={() => setCurrent("1")}
                        selected={current === "1"}
                        label="Not applied"
                        value="1"
                        title={title}
                        company={company}
                        active={active}
                        job_id={job.id}
                    />
                    <StageTracker
                        handleClick={() => setCurrent("2")}
                        selected={current === "2"}
                        label="Applied"
                        value="2"
                        title={title}
                        company={company}
                        active={active}
                        job_id={job.id}
                    />
                    <StageTracker
                        handleClick={() => setCurrent("3")}
                        selected={current === "3"}
                        label="Interview"
                        value="3"
                        title={title}
                        company={company}
                        active={active}
                        job_id={job.id}
                    />
                    <StageTracker
                        handleClick={() => setCurrent("4")}
                        selected={current === "4"}
                        label="Offer"
                        value="4"
                        title={title}
                        company={company}
                        active={active}
                        job_id={job.id}
                    />
                </div>
                <Link to={`/jobs/${job.id}`} className="expand_btn">&#8250;</Link>
            </div>
            <hr className="status-line"></hr>
        </>
    );
};

export default JobPreview;