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
            <h1>Step 3: Interview Details</h1>
            <h3>Add any interview details. No interview yet? Just leave this blank and edit later.</h3>
            <label htmlFor="interview_date">Interview date</label>
            <input
                type="date"
                id="interview_date"
                value={values.interview_date}
                onChange={handleInterviewChange}
            />

            <label htmlFor="interview_format">Interview format</label>
            <select
                id="interview_format"
                value={values.interview_format}
                onChange={handleInterviewFormat}
            >
                <option value="person">In person</option>
                <option value="phone">Telephone</option>
                <option value="online">Online</option>
            </select>

            <label htmlFor="interviewer">Interview name</label>
            <input
                type="text"
                id="interviewer"
                value={values.interviewer}
                onChange={handleInterviewChange}
            />

            <textarea
                cols="30"
                rows="10"
                placeholder="Interview notes"
                id="notes"
                value={values.notes}
                onChange={handleInterviewChange}
            />
            <button onClick={prevStep}>Go back</button>
            <button type="submit" onClick={handleSecondSubmit}>Finish &amp; Save</button>
        </>
    );
};

export default InterviewDetailsForm;