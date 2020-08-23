import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// local reducer that handles updating local state properties (initialised in the initialState variable below)
const movieFormReducer = (state, action) => {
    switch (action.type) {
        case 'textFieldNameChange':
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value
            }
        case 'resetForm':
            return {
                ...initialState,
            }
        default: return;
    }
}

// initial state of component
const initialState = {
    jobTitle: "",
    company: "",
    jobDescription: "",
    salary: 0,
    location: "",
    dateApplied: "",
    closingDate: "",
    recruiterName: "",
    recruiterEmail: "",
    recruiterPhone: "",
    stage: 1,
}

const AddJobForm = () => {
    const [state, dispatch] = useReducer(movieFormReducer, initialState);
    const dispatchAction = useDispatch();

    const {
        jobTitle,
        company,
        jobDescription,
        salary,
        location,
        dateApplied,
        closingDate,
        recruiterName,
        recruiterEmail,
        recruiterPhone,
        stage
    } = state;

    const handleChange = e => {
        dispatch({
            type: 'textFieldNameChange',
            payload: {
                fieldName: e.target.id,
                value: e.target.value
            }
        })
    }

    // changes the stage state to match the radio input
    const handleRadio = (e) => {
        let val = +e.target.value;

        dispatch({
            type: 'textFieldNameChange',
            payload: {
                fieldName: "stage",
                value: val
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // dispatchAction()

        dispatch({ type: 'resetForm' })
    }

    return (
        <React.Fragment>
            <h1 className="brand-text">bagajob</h1>
            <div className="form-container-large addjob-form-container">
            <h4 className="addjob-form-headerjob">Job Details</h4>
                <form className="addjob-form" onSubmit={handleSubmit}>
                    <div className="form-input-group addjob-input-group addjob-input-jobtitle">
                        <label
                            className="label"
                            htmlFor="jobTitle"
                        >Job Title
                        </label>
                        <input
                            id="jobTitle"
                            value={jobTitle}
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
                            value={company}
                            type="text"
                            onChange={e => handleChange(e)}
                        />
                    </div>

                    <div className="form-input-group addjob-input-group addjob-input-jobdescription">
                        <label
                            className="label"
                            htmlFor="jobDescription"
                        >Job Description
                        </label>
                        <input
                            id="jobDescription"
                            value={jobDescription}
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
                            value={salary}
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
                            value={location}
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
                            value={dateApplied}
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
                            value={closingDate}
                            type="date"
                            onChange={e => handleChange(e)}
                        />
                    </div >

                    <h4 className="addjob-form-headercontact">Contact</h4>

                    <div className="form-input-group addjob-input-group addjob-input-contactname">
                        <label
                            className="label"
                            htmlFor="recruiterName"
                        >Contact Name
                        </label>
                        <input
                            id="recruiterName"
                            value={recruiterName}
                            type="text"
                            onChange={e => handleChange(e)}
                        />
                    </div >

                    <div className="form-input-group addjob-input-group addjob-input-contacttitle">
                        <label
                            className="label"
                            htmlFor="contactTitle"
                        >Contact Title
                        </label>
                        <input
                            id="contactName"
                            type="text"
                        />
                    </div >

                    <div className="form-input-group addjob-input-group addjob-input-contactemail">
                        <label
                            className="label"
                            htmlFor="recruiterEmail"
                        >Recruiter Email
                        </label>
                        <input
                            id="recruiterEmail"
                            value={recruiterEmail}
                            type="email"
                            onChange={e => handleChange(e)}
                        />
                    </div >

                    <div className="form-input-group addjob-input-group addjob-input-contacttel">
                        <label
                            className="label"
                            htmlFor="recruiterPhone"
                        >Recruiter Phone
                        </label>
                        <input
                            id="recruiterPhone"
                            value={recruiterPhone}
                            type="text"
                            onChange={e => handleChange(e)}
                        />
                    </div >

                    <h4 class="addjob-form-headerstages">Application Stage</h4>
                    <div className="form-input-group addjob-input-group-stages">
                        <label className="label" htmlFor="0">
                            <input
                                className="radio"
                                name="stage"
                                type="radio"
                                value="0"
                                id="0"
                                onClick={e => handleRadio(e)}
                            />Not applied
                        </label>
                        <label className="label" htmlFor="1">
                            <input
                                className="radio"
                                name="stage"
                                type="radio"
                                value="1"
                                id="1"
                                onClick={e => handleRadio(e)}
                            />Applied
                        </label>
                        <label className="label" htmlFor="2">
                            <input
                                className="radio"
                                name="stage"
                                type="radio"
                                value="2"
                                id="2"
                                onClick={e => handleRadio(e)}
                            />Interview
                        </label>
                        <label className="label" htmlFor="3">
                            <input
                                className="radio"
                                name="stage"
                                type="radio"
                                value="3"
                                id="3"
                                onClick={e => handleRadio(e)}
                            />Offer
                        </label>
                    </div >
                    <button
                        className="primarybtn addjob-btn"
                        type="submit">Add job
                    </button>
                </form >
            </div >
        </React.Fragment>
    );
};

export default AddJobForm;