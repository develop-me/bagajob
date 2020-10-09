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
        
            <h1>Step 2: Application</h1>
            <h3>Here you can upload your CV, Cover Letter and any application notes.</h3>
            <label htmlFor="cv">Upload my CV</label>
            <input
                type="text"
                id="cv"
                onChange={handleJobChange}
            />
            <label htmlFor="cover_letter">Upload my Cover Letter</label>
            <input
                type="text"
                id="cover_letter"
                onChange={handleJobChange}
            />
            <label htmlFor="data">Applications Notes:</label>
            <input 
                type="text"
                id="data"
                onChange={handleAppChange}

            />
            <button onClick={prevStep}>Go back</button>
            <button onClick={nextStep}>Next step</button>
        </ >
    );
};

export default ApplicationDetailsForm;