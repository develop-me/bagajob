import React from 'react'

const JobDetailsForm = ({
    currentStep,
    nextStep,
    values,
    handleJobChange,
    handleFirstSubmit
}) => {
    return currentStep && (
        <>
            <img className="close-icon filter-red" src={ require('../../assets/images/close.svg')} alt="close form"/>
            <h1 className="addjob-form-headerjob">Step 1: <span style={{ fontFamily: "LatoLight"}}>Job Details</span></h1>
            <p>Here you can add details of the job you are applying for.</p>
            <form className="addjob-form" onSubmit={handleFirstSubmit, nextStep}>
                <div className="form-input-group addjob-input-group addjob-input-jobtitle">
                    <label
                        className="label"
                        htmlFor="title"
                    >Job Title
                    </label>
                    <input
                        placeholder="Job Title"
                        type="text"
                        id="title"
                        value={values.title}
                        onChange={handleJobChange}
                        required
                    />
                </div>

                <div className="form-input-group addjob-input-group addjob-input-company">
                    <label
                        className="label"
                        htmlFor="company"
                    >Company
                        </label>
                    <input
                        placeholder="Company"
                        type="text"
                        id="company"
                        value={values.company}
                        onChange={handleJobChange}
                        required
                    />
                </div>

                <div className="form-input-group addjob-input-group addjob-input-salary">
                    <label
                        className="label mr-1"
                        htmlFor="salary"
                    >Salary p/a
                    </label>
                    <input
                        type="number"
                        id="salary"
                        value={values.salary}
                        onChange={handleJobChange}
                    />
                </div>

                <div className="form-input-group addjob-input-group addjob-input-location">
                    <label
                        className="label"
                        htmlFor="location"
                    >Location
                    </label>
                    <input
                        placeholder="City"
                        type="text"
                        id="location"
                        value={values.location}
                        onChange={handleJobChange}
                    />
                </div >

                <div className="form-input-group addjob-input-group addjob-input-appdate">
                    <label
                        className="label mr-1"
                        htmlFor="date_applied"
                    >Date Applied
                    </label>
                    <input
                        type="date"
                        id="date_applied"
                        value={values.date_applied}
                        onChange={handleJobChange}
                    />
                </div >

                <div className="form-input-group addjob-input-group addjob-input-closedate">
                    <label
                        className="label mr-1"
                        htmlFor="closing_date"
                    >Closing Date
                    </label>
                    <input
                        type="date"
                        id="closing_date"
                        value={values.closing_date}
                        onChange={handleJobChange}
                    />
                </div >

                <div className="form-input-group addjob-input-group addjob-input-jobdescription">
                    <label
                        className="label"
                        htmlFor="description"
                    >Job Description
                    </label>
                    <input
                        placeholder="Job Description"
                        type="text"
                        id="description"
                        value={values.description}
                        onChange={handleJobChange}
                    />
                </div>
                <button className="next-step-btn" type="submit">Next Step<img className="arrow-icon filter-blue" src={ require('../../assets/images/arrow_right.svg')} alt="next step"></img></button>
            </form>

        </>
    );
};

export default JobDetailsForm;