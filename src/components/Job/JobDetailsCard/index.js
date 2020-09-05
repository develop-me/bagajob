import React from 'react'
import JobDetail from './JobDetail'

const JobDetailsCard = ({ job }) => {
    const {
        jobTitle,
        company,
        jobDescription,
        salary,
        location,
        dateApplied,
        closingDate,
        recruiterName,
        recruiterEmail,
        recruiterPhone
    } = job

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
            <h1 className="para_header">Job Details</h1>
            <JobDetail
                label="Job Title"
                inputType="text"
                jobProperty="jobTitle"
                value={jobTitle}
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
                jobProperty="jobDescription"
                value={jobDescription}
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
                jobProperty="dateApplied"
                value={dateApplied}
            />
            <JobDetail
                label="Closing Date"
                inputType="date"
                jobProperty="closingDate"
                value={closingDate}
            />
            <JobDetail
                label="Recruiter Name"
                inputType="text"
                jobProperty="recruiterName"
                value={recruiterName}
            />
            <JobDetail
                label="Recruiter Email"
                inputType="email"
                jobProperty="recruiterEmail"
                value={recruiterEmail}
            />
            <JobDetail
                label="Recruiter Phone"
                inputType="text"
                jobProperty="recruiterPhone"
                value={recruiterPhone}
            />
        </div>
    )
}

export default JobDetailsCard