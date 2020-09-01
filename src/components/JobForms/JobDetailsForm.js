import React from 'react'

const JobDetailsForm = ({ values, handleChange, nextStep }) => {
    return (
        <>
            <h1 className="addjob-form-headerjob">Step 1: Job Details</h1>
            <h3>Here you can add details of the job you are applying for.</h3>
            <form>
                <div className="form-input-group addjob-input-group addjob-input-jobtitle">
                    <label
                        className="label"
                        htmlFor="jobTitle"
                    >Job Title
                    </label>
                    <input
                        id="jobTitle"
                        value={values.jobTitle}
                        type="text"
                        onChange={e => handleChange(e)}
                    />
                </div>

                <div className="form-input-group addjob-input-group addjob-input-company">
                    <label
                        className="label"
                        htmlFor="company"
                    >Company
                        </label>
                    <input
                        id="company"
                        value={values.company}
                        type="text"
                        onChange={e => handleChange(e)}
                    />
                </div>

                <div className="form-input-group addjob-input-group addjob-input-salary">
                    <label
                        className="label mr-1"
                        htmlFor="salary"
                    >Salary p/a
                    </label>
                    <input
                        id="salary"
                        value={values.salary}
                        type="number"
                        onChange={e => handleChange(e)}
                    />
                </div>

                <div className="form-input-group addjob-input-group addjob-input-location">
                    <label
                        className="label"
                        htmlFor="location"
                    >Location
                    </label>
                    <input
                        id="location"
                        value={values.location}
                        type="text"
                        onChange={e => handleChange(e)}
                    />
                </div >

                <div className="form-input-group addjob-input-group addjob-input-appdate">
                    <label
                        className="label mr-1"
                        htmlFor="dateApplied"
                    >Date Applied
                    </label>
                    <input
                        id="dateApplied"
                        value={values.dateApplied}
                        type="date"
                        onChange={e => handleChange(e)}
                    />
                </div >

                <div className="form-input-group addjob-input-group addjob-input-closedate">
                    <label
                        className="label mr-1"
                        htmlFor="closingDate"
                    >Closing Date
                    </label>
                    <input
                        id="closingDate"
                        value={values.closingDate}
                        type="date"
                        onChange={e => handleChange(e)}
                    />
                </div >

                <div className="form-input-group addjob-input-group addjob-input-jobdescription">
                    <label
                        className="label"
                        htmlFor="jobDescription"
                    >Job Description
                    </label>
                    <input
                        id="jobDescription"
                        value={values.description}
                        type="text"
                        onChange={e => handleChange(e)}
                    />
                </div>
            </form>
            <button onClick={nextStep}>Next step</button>
        </>
    );
};

export default JobDetailsForm;