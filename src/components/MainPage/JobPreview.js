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

    // Calculate the size of the client's window on component load
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let smallScreen = false;

    if (width < 768) {
        smallScreen = true;
    }

    const [current, setCurrent] = useState(stage)

    return (
        <>
            <div className=  {!smallScreen ? "job-card-container" : "job-card-container-small"}>

                { smallScreen ?                     
   
                <div className="job-card-text-small">
                    <p className="job-card-text-bold">{job.title}</p><p className="job-card-at"> at</p><p className="job-card-text-bold">{job.company}</p>
                </div>
                :
                null }

            <div className={smallScreen ? "job-card-flex-container-small" : "job-card-flex-container" }>

                { !smallScreen ? 
                <div className="job-card-text">
                        <h4 className="para-highlight">
                            {job.title}
                        </h4>
                        <h4 className="para-header">
                            {job.company}
                        </h4>
                    </div>
                : null }
                
                <div className="status-bar-container">
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
                </div>
                <Link to={`/jobs/${job.id}`}><img className="expand-job-btn" src={ require('../../assets/images/arrow_right.svg') }/></Link>
            </div>
            </div>
            {/* <hr className="status-line"></hr> */}
        </>
    );
};

export default JobPreview;