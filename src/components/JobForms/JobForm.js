import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux'
import { addNewJob } from '../../data/Jobs/actions'
import JobDetailsForm from './JobDetailsForm'
import ApplicationDetailsForm from './ApplicationDetailsForm'
import InterviewDetailsForm from './InterviewDetailsForm'

// local reducer that handles updating local state properties (initialised in the initialState variable below)
const jobFormReducer = (state, action) => {
    switch (action.type) {
        case 'FIELD_CHANGE':
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value
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
    cv: "",
    cover_letter: "",
    application_notes: "",
    step: 1,
}

const JobForm = () => {
    const [state, dispatch] = useReducer(jobFormReducer, initialState);
    const dispatchAction = useDispatch();

    const { step } = state

    const firstFormValues = {
        jobTitle: state.jobTitle,
        comppany: state.company,
        description: state.jobDescription,
        location: state.location,
        salary: state.salary,
        dateApplied: state.dateApplied,
        closingDate: state.closingDate
    }

    const secondFormValues = {
        cv: state.cv,
        cover_letter: state.cover_letter,
        application_notes: state.application_notes,
    }

    // Proceed to next step
    const nextStep = () => {
        dispatch({ type: "NEXT_STEP" })
    };

    // Go back to prev step
    const prevStep = () => {
        dispatch({ type: "PREVIOUS_STEP" })
    };

    const handleChange = e => {
        dispatch({
            type: 'FIELD_CHANGE',
            payload: {
                fieldName: e.target.id,
                value: e.target.value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log(state)

        dispatchAction(addNewJob(state))

        dispatch({ type: 'resetForm' })
    }

    switch (step) {
        case 1:
            return (
                <JobDetailsForm
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={firstFormValues}
                />
            );
        case 2:
            return (
                <ApplicationDetailsForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={secondFormValues}
                />
            );
        case 3:
            return (
                <InterviewDetailsForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                // values={values}
                />
            );
        default:
            (console.log('This is a multi-step form built with React.'))
    }
}

export default JobForm;