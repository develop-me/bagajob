import React, { useReducer } from 'react';

// local reducer that handles updating local state properties (initialised in the initialState variable below)
const movieFormReducer = (state, action) => {
    switch (action.type) {
        case 'textFieldNameChange':
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value
            }
        case 'startEditing':
            return {
                ...state,
                editing: true
            }
        case 'stopEditing':
            return {
                ...state,
                editing: false
            }
        default: return;
    }
}

const JobDetailsCard = ({ job }) => {
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
        recruiterPhone
    } = job

    // initial state of component
    const initialState = {
        jobTitle: jobTitle,
        company: company,
        jobDescription: jobDescription,
        salary: salary,
        location: location,
        dateApplied: dateApplied,
        closingDate: closingDate,
        recruiterName: recruiterName,
        recruiterEmail: recruiterEmail,
        recruiterPhone: recruiterPhone,
        stage: 1,
        editing: false
    }

    const [state, dispatch] = useReducer(movieFormReducer, initialState);

    const handleChange = e => {
        dispatch({
            type: 'textFieldNameChange',
            payload: {
                fieldName: e.target.id,
                value: e.target.value
            }
        })
    }

    const handleEdit = e => {
        if (e.target.innerText === 'Edit') {
            dispatch({
                type: 'startEditing',
            })
        } else {
            dispatch({
                type: 'stopEditing',
            })
        }
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
                <h1 className="para_header">Job Details</h1>
                {state.editing ?
                    <button onClick={e => handleEdit(e)}>Save</button>
                    :
                    <button onClick={e => handleEdit(e)}>Edit</button>
                }

                <div className="input-group">
                    <label
                        className="label"
                        htmlFor="jobTitle"
                    >Job Title
                    </label>
                    {state.editing ?
                        <input
                            id="jobTitle"
                            value={jobTitle}
                            type="text"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.jobTitle}</p>
                    }
                </div>

                <div className="input-group">
                    <label
                        className="label"
                        htmlFor="company"
                    >Company
                        </label>
                    {state.editing ?
                        <input
                            id="company"
                            value={company}
                            type="text"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.company}</p>
                    }
                </div>

                <div className="input-group">
                    <label
                        className="label"
                        htmlFor="jobDescription"
                    >Job Description
                    </label>
                    {state.editing ?
                        <input
                            id="jobDescription"
                            value={jobDescription}
                            type="text"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.jobDescription}</p>
                    }
                </div>

                <div className="input-group">
                    <label
                        className="label mr-1"
                        htmlFor="salary"
                    >Salary p/a
                    </label>
                    {state.editing ?
                        <input
                            id="salary"
                            value={salary}
                            type="number"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.salary}</p>
                    }
                </div>

                <div className="input-group">
                    <label
                        className="label"
                        htmlFor="location"
                    >Location
                    </label>
                    {state.editing ?
                        <input
                            id="location"
                            value={location}
                            type="text"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.location}</p>
                    }
                </div >

                <div className="input-group">
                    <label
                        className="label mr-1"
                        htmlFor="dateApplied"
                    >Date Applied
                    </label>
                    {state.editing ?
                        <input
                            id="dateApplied"
                            value={dateApplied}
                            type="date"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.dateApplied}</p>
                    }
                </div >

                <div className="input-group">
                    <label
                        className="label mr-1"
                        htmlFor="closingDate"
                    >Closing Date
                    </label>
                    {state.editing ?
                        <input
                            id="closingDate"
                            value={closingDate}
                            type="date"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.closingDate}</p>
                    }
                </div >

                <div className="input-group">
                    <label
                        className="label"
                        htmlFor="recruiterName"
                    >Recruiter Name
                    </label>
                    {state.editing ?
                        <input
                            id="recruiterName"
                            value={recruiterName}
                            type="text"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.recruiterName}</p>
                    }
                </div >

                <div className="input-group">
                    <label
                        className="label"
                        htmlFor="recruiterEmail"
                    >Recruiter Email
                    </label>
                    {state.editing ?
                        <input
                            id="recruiterEmail"
                            value={recruiterEmail}
                            type="email"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.recruiterEmail}</p>
                    }
                </div >

                <div className="input-group">
                    <label
                        className="label"
                        htmlFor="recruiterPhone"
                    >Recruiter Phone
                    </label>
                    {state.editing ?
                        <input
                            id="recruiterPhone"
                            value={recruiterPhone}
                            type="text"
                            onChange={e => handleChange(e)}
                        />
                        :
                        <p>foobar{state.recruiterPhone}</p>
                    }
                </div>
            </div>
        </>
    );
};

export default JobDetailsCard;