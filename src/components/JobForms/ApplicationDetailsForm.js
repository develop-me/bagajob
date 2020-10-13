import React from 'react';

const ApplicationDetailsForm = ({
    currentStep,
    prevStep,
    values,
    nextStep,
    handleJobChange,
    handleAppChange
}) => {
    return currentStep && (
        <>
        <div className="addjob-input-group">
        <img className="close-icon filter-red" src={ require('../../assets/images/close.svg')} alt="close form"/>
        <h1 className="addjob-form-headerjob">Step 2: <span style={{ fontFamily: "LatoLight"}}>Application Details</span></h1>
            <p>Here you can upload your CV, Cover Letter and any application notes.</p>
            <label className="label" htmlFor="cv">Upload my CV</label>
            <input
                type="text"
                id="cv"
                onChange={handleJobChange}
            />
            <label className="label" htmlFor="cover_letter">Upload my Cover Letter</label>
            <input
                type="text"
                id="cover_letter"
                onChange={handleJobChange}
            />
            <label className="label" htmlFor="data">Application Notes:</label>
            <input 
                type="text"
                id="data"
                onChange={handleAppChange}

            />
            </div>
            <div className="addjob-nav-btns">
                <button onClick={prevStep} className="next-step-btn"><img className="arrow-icon filter-blue" src={ require('../../assets/images/arrow_back.svg')} alt="next step"></img>Go Back</button>
                <button onClick={nextStep} className="next-step-btn">Next Step<img className="arrow-icon filter-blue" src={ require('../../assets/images/arrow_right.svg')} alt="next step"></img></button>
            </div>
        </ >
    );
};

export default ApplicationDetailsForm;