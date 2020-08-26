import React from 'react'
import JobDetail from './JobDetail'

const JobDetailsCard = ({ job }) => {

    // destructure job object properties
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
        <>
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
                <h1 className="para_header">Job Details</h1>
                <JobDetail
                    label="Job Title"
                    job={job}
                    value={jobTitle}
                    inputType="text"
                    jobProperty="jobTitle"
                />
                <JobDetail
                    label="Company"
                    job={job}
                    value={company}
                    inputType="text"
                    jobProperty="company"
                />
                <JobDetail
                    label="Job Description"
                    job={job}
                    value={jobDescription}
                    inputType="text"
                    jobProperty="jobDescription"
                />
                <JobDetail
                    label="Salary p/a"
                    job={job}
                    value={salary}
                    inputType="number"
                    jobProperty="salary"
                />
                <JobDetail
                    label="Location"
                    job={job}
                    value={location}
                    inputType="text"
                    jobProperty="location"
                />
                <JobDetail
                    label="Date Applied"
                    job={job}
                    value={dateApplied}
                    inputType="date"
                    jobProperty="dateApplied"
                />
                <JobDetail
                    label="Closing Date"
                    job={job}
                    value={closingDate}
                    inputType="date"
                    jobProperty="closingDate"
                />
                <JobDetail
                    label="Recruiter Name"
                    job={job} value={recruiterName}
                    inputType="text"
                    jobProperty="recruiterName"
                />
                <JobDetail
                    label="Recruiter Email"
                    job={job}
                    value={recruiterEmail}
                    inputType="email"
                    jobProperty="recruiterEmail"
                />
                <JobDetail
                    label="Recruiter Phone"
                    job={job}
                    value={recruiterPhone}
                    inputType="text"
                    jobProperty="recruiterPhone"
                />
            </div>
        </>
    );
};

export default JobDetailsCard;