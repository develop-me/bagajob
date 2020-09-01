import React from 'react';

const InterviewDetailsForm = ({ prevStep, nextStep }) => {
    return (
        <div>
            <h1>Step 3: Interview Details</h1>
            <h3>Add any interview details. No interview yet? Just leave this blank and edit later.</h3>
            <label htmlFor="interviewDate">Interview date</label>
            <input type="date" id="interviewDate" />

            <label htmlFor="interviewFormat">Interview format</label>
            <select name="interviewFormat" id="interviewFormat">
                <option value="person">In person</option>
                <option value="phone">Telephone</option>
                <option value="online">Online</option>
            </select>

            <label htmlFor="interviewerName">Interview name</label>
            <input type="text" id="interviewerName" />

            <textarea placeholder="Interview notes" cols="30" rows="10"></textarea>
            <button onClick={prevStep}>Go back</button>
            <button onClick={nextStep}>Finish &amp; Save</button>
        </div>
    );
};

export default InterviewDetailsForm;