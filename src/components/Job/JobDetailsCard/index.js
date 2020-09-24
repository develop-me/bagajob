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
        closing_date
    } = job

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
            <h1 className="para_header">Job Details</h1>
            <JobDetail
                label="Job Title"
                inputType="text"
                jobProperty="title"
                value={title}
            />
            <JobDetail
                label="Company"
                inputType="text"
                jobProperty="company"
                value={company}
            />
            <JobDetail
                label="Job Description"
                inputType="text"
                jobProperty="description"
                value={description}
            />
            <JobDetail
                label="Salary p/a"
                inputType="number"
                jobProperty="salary"
                value={salary}
            />
            <JobDetail
                label="Location"
                inputType="text"
                jobProperty="location"
                value={location}
            />
            <JobDetail
                label="Date Applied"
                inputType="date"
                jobProperty="date_applied"
                value={date_applied}
            />
            <JobDetail
                label="Closing Date"
                inputType="date"
                jobProperty="closing_date"
                value={closing_date}
            />
        </div>
    )
}

export default JobDetailsCard