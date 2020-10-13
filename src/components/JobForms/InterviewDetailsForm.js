import React from 'react';

const InterviewDetailsForm = ({
    currentStep,
    prevStep,
    handleSecondSubmit,
    values,
    handleInterviewChange,
    handleInterviewFormat
}) => {
    return currentStep && (
        <>
            <img className="close-icon filter-red" src={ require('../../assets/images/close.svg')} alt="close form"/>
            <h1 className="addjob-form-headerjob">Step 3: <span style={{ fontFamily: "LatoLight"}}>Interview Details</span></h1>
            <p>Add any interview details. No interview yet? Just leave this blank and edit later.</p>
            <div className="addjob-input-group  add-interview-details">
            <div className="add-interview-details-input-group add-interview-details-date">
                <label className="label" htmlFor="interview_date">Interview date</label>
                <input
                    type="date"
                    id="interview_date"
                    value={values.interview_date}
                    onChange={handleInterviewChange}
                />
            </div>
            <div className="add-interview-details-input-group add-interview-details-format">
                <label className="label" htmlFor="interview_format">Interview format</label>
                <select
                    id="interview_format"
                    value={values.interview_format}
                    onChange={handleInterviewFormat}
                >
                    <option value="in_person">In person</option>
                    <option value="telephone">Telephone</option>
                    <option value="video_call">Video Call</option>
                    <option value="online_testing">Online Test</option>
                </select>
            </div>
            <div className="add-interview-details-input-group add-interview-details-interviewer">
                <label  className="label" htmlFor="interviewer">Interviewer Name</label>
                <input
                type="text"
                id="interviewer"
                value={values.interviewer}
                onChange={handleInterviewChange}
            />
            </div>
        <div className="add-interview-details-input-group add-interview-details-notes">
        <label className="label" htmlFor="notes">Interview Notes</label>
            <input
                placeholder="Interview notes"
                id="notes"
                value={values.notes}
                onChange={handleInterviewChange}
            />
        </div>
        </div>

        <div className="addjob-nav-btns">
            <button onClick={prevStep} className="next-step-btn"><img className="arrow-icon filter-blue" src={ require('../../assets/images/arrow_back.svg')} alt="next step"></img>Go Back</button>
            <button onClick={handleSecondSubmit} className="next-step-btn">Finish &amp; Save<img className="arrow-icon filter-green" src={ require('../../assets/images/done-24px.svg')} alt="finish and save"></img></button>
        </div>
        </>
    );
};

export default InterviewDetailsForm;