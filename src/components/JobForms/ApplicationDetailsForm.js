import React from 'react';

const ApplicationDetailsForm = ({ prevStep, values, nextStep }) => {
    return (
        <div>
            <h1>Step 2: Application</h1>
            <h3>Here you can upload your CV, Cover Letter and any application notes.</h3>
            <label htmlFor="myFile">Upload my CV</label>
            <input type="file" id="myFile" name="filename" />
            <label htmlFor="myFile">Upload my Cover Letter</label>
            <input type="file" id="myFile" name="filename" />
            <textarea placeholder="Application notes" cols="30" rows="10"></textarea>
            <button onClick={prevStep}>Go back</button>
            <button onClick={nextStep}>Next step</button>
        </div>
    );
};

export default ApplicationDetailsForm;