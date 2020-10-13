import React from 'react'
import JobDetail from './JobDetail'

const JobDetailsCard = ({ job }) => {
    const {
        title,
        company,
        description,
        salary,
        location,
        date_applied,
        closing_date,
        active,
        stage
    } = job

    return (
        <div className="job-detail-card">
            <h1 className="para-highlight">Job Details</h1>
            <JobDetail
                label="Job Title"
                inputType="text"
                jobProperty="title"
                value={title}
                company={company}
                active={active}
                stage={stage}
            />
            <JobDetail
                label="Company"
                inputType="text"
                jobProperty="company"
                value={company}
                title={title}
                active={active}
                stage={stage}
            />
            <JobDetail
                label="Job Description"
                inputType="text"
                jobProperty="description"
                value={description}
                title={title}
                company={company}
                active={active}
                stage={stage}
            />
            <JobDetail
                label="Salary p/a"
                inputType="number"
                jobProperty="salary"
                value={salary}
                title={title}
                company={company}
                active={active}
                stage={stage}
            />
            <JobDetail
                label="Location"
                inputType="text"
                jobProperty="location"
                value={location}
                title={title}
                company={company}
                active={active}
                stage={stage}
            />
            <JobDetail
                label="Date Applied"
                inputType="date"
                jobProperty="date_applied"
                value={date_applied}
                title={title}
                company={company}
                active={active}
                stage={stage}
            />
            <JobDetail
                label="Closing Date"
                inputType="date"
                jobProperty="closing_date"
                value={closing_date}
                title={title}
                company={company}
                active={active}
                stage={stage}
            />
        </div>
    )
}

export default JobDetailsCard