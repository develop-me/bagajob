import React from 'react';

const ApplicationDetailsForm = ({
    currentStep,
    prevStep,
    values,
    nextStep,
    handleChange
}) => {
    return currentStep && (
        <>
            <h1>Step 2: Application</h1>
            <h3>Here you can upload your CV, Cover Letter and any application notes.</h3>
            <label htmlFor="cv">Upload my CV</label>
            <input type="file" id="cv" />
            <label htmlFor="cover_letter">Upload my Cover Letter</label>
            <input type="file" id="cover_letter" />
            <textarea
                cols="30"
                rows="10"
                placeholder="Application notes"
                id="application_notes"
                value={values.application_notes}
                onChange={handleChange}

            />
            <button onClick={prevStep}>Go back</button>
            <button onClick={nextStep}>Next step</button>
        </ >
    );
};

export default ApplicationDetailsForm;