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
        <div className="form-container-large">
            <form onSubmit={handleSubmit}>
                <div className="form-input-group addjob-input-group">
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

                <div className="form-input-group addjob-input-group">
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

                <div className="form-input-group addjob-input-group">
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

                <div className="form-input-group addjob-input-group">
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

                <div className="form-input-group addjob-input-group">
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

                <div className="form-input-group addjob-input-group">
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

                <div className="form-input-group addjob-input-group">
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


                <div className="form-input-group addjob-input-group">
                    <label
                        className="label"
                        htmlFor="recruiterName"
                    >Recruiter Name
                    </label>
                    <input
                        id="recruiterName"
                        value={recruiterName}
                        type="text"
                        onChange={e => handleChange(e)}
                    />
                </div >

                <div className="form-input-group addjob-input-group">
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

                <div className="form-input-group addjob-input-group">
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

                <label style={{ display: "block" }} className="label mb-1" htmlFor="">Application Stage</label>
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
    );
};

export default AddJobForm;