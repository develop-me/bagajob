import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addJob } from '../../data/Jobs/actions'
import JobDetailsForm from './JobDetailsForm'
import ApplicationDetailsForm from './ApplicationDetailsForm'
import InterviewDetailsForm from './InterviewDetailsForm'

// local reducer that handles updating local state properties (initialised in the initialState variable below)
const jobFormReducer = (state, action) => {
    switch (action.type) {
        case 'FIELD_CHANGE':
            return {
                ...state,
                job: {
                    ...state.job,
                    [action.payload.fieldName]: action.payload.value
                }
            }
        case 'INTERVIEW_STAGE_CHANGE':
            return {
                ...state,
                job: {
                    ...state.job,
                    interview_format: action.payload
                }
            }
        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step + 1
            }
        case 'PREVIOUS_STEP':
            return {
                ...state,
                step: state.step - 1
            }
        case 'RESET_FORM':
            return {
                ...initialState,
            }
        default: return;
    }
}

// initial state of component
const initialState = {
    job: {
        title: "",
        company: "",
        description: "",
        salary: 0,
        location: "",
        date_applied: "",
        closing_date: "",
        recruiter_name: "",
        recruiter_email: "",
        recruiter_phone: "",
        cv: "",
        cover_letter: "",
        application_notes: "",
        interview_date: "",
        interview_notes: "",
        interview_format: "select",
        interviewer: "",
    },
    step: 1
}

const JobForm = () => {
    const [state, dispatch] = useReducer(jobFormReducer, initialState);
    const dispatchAction = useDispatch();
    const { id: user_id } = useSelector(state => state.user)
    const {
        job: {
            title,
            company,
            description,
            salary,
            location,
            date_applied,
            closing_date,
            cv,
            cover_letter,
            application_notes,
            interview_date,
            interview_notes,
            interview_format,
            interviewer
        },
        step
    } = state

    // form fields for first step
    const firstFormValues = {
        title,
        company,
        description,
        salary,
        location,
        date_applied,
        closing_date
    }

    // form fields for second step
    const secondFormValues = {
        cv,
        cover_letter,
        application_notes
    }

    // form fields for third step
    const thirdFormValues = {
        interview_date,
        interview_notes,
        interview_format,
        interviewer
    }

    // proceed to next step
    const nextStep = () => {
        dispatch({ type: "NEXT_STEP" })
    };

    // go back to prev step
    const prevStep = () => {
        dispatch({ type: "PREVIOUS_STEP" })
    };

    // handles changing input field
    const handleChange = e => {
        dispatch({
            type: 'FIELD_CHANGE',
            payload: {
                fieldName: e.target.id,
                value: e.target.value
            }
        })
    }

    // handles changing the interview format in the interview details component
    const handleInterviewFormat = e => {
        dispatch({
            type: 'INTERVIEW_STAGE_CHANGE',
            payload: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const user_id = { ...state.user.id}
        
        // Issue #50 - user_id = null
        console.log(user_id)

        // assigns the job object in state to data variable
        const data = { ...state.job }

        // Works correctly
        console.log(data)

        // dispatches object with user id and job data
        dispatchAction(addJob({
            user_id,
            job_data: data
        }))

        dispatch({ type: 'RESET_FORM' })
    }
    return (
        <form onSubmit={handleSubmit}>
            <JobDetailsForm
                currentStep={step === 1}
                nextStep={nextStep}
                handleChange={handleChange}
                values={firstFormValues}
            />
            <ApplicationDetailsForm
                currentStep={step === 2}
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={secondFormValues}
            />
            <InterviewDetailsForm
                currentStep={step === 3}
                nextStep={nextStep}
                prevStep={prevStep}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleInterviewFormat={handleInterviewFormat}
                values={thirdFormValues}
            />
        </form>
    )
}

export default JobForm;