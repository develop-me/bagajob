import React from 'react'

const JobDetailsForm = ({
    currentStep,
    nextStep,
    values,
    handleChange
}) => {
    return currentStep && (
        <>
            <h1 className="addjob-form-headerjob">Step 1: Job Details</h1>
            <h3>Here you can add details of the job you are applying for.</h3>
            <form>
                <div className="form-input-group addjob-input-group addjob-input-jobtitle">
                    <label
                        className="label"
                        htmlFor="title"
                    >Job Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={values.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-input-group addjob-input-group addjob-input-company">
                    <label
                        className="label"
                        htmlFor="company"
                    >Company
                        </label>
                    <input
                        type="text"
                        id="company"
                        value={values.company}
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>

                <div className="form-input-group addjob-input-group addjob-input-location">
                    <label
                        className="label"
                        htmlFor="location"
                    >Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        value={values.location}
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div >

                <div className="form-input-group addjob-input-group addjob-input-jobdescription">
                    <label
                        className="label"
                        htmlFor="description"
                    >Job Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={values.description}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <button onClick={nextStep}>Next step</button>
        </>
    );
};

export default JobDetailsForm;