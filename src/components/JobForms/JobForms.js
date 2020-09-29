import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJob } from '../../data/Jobs/actions'
import { addAppNote } from '../../data/AppNotes/actions'
import { addInterview } from '../../data/Interviews/actions'
import JobDetailsForm from './JobDetailsForm'
import ApplicationDetailsForm from './ApplicationDetailsForm'
import InterviewDetailsForm from './InterviewDetailsForm'

// local reducer that handles updating local state properties (initialised in the initialState variable below)
const jobFormReducer = (state, action) => {
    switch (action.type) {
        case 'JOB_FIELD_CHANGE':
            return {
                // only works on field names that exist within job object
                ...state,
                job: {
                    ...state.job,
                    [action.payload.fieldName]: action.payload.value
                }
            }
        case 'APPLICATION_FIELD_CHANGE':
            return {
                ...state,
                application_notes : {
                    ...state.application_notes,
                    [action.payload.fieldName]: action.payload.value
                }
            }
        case 'INTERVIEW_FIELD_CHANGE':
            return {
                ...state,
                interview : {
                    ...state.interview,
                    [action.payload.fieldName]: action.payload.value
                }
            }
            
        case 'INTERVIEW_STAGE_CHANGE':
            return {
                ...state,
                interview : {
                    ...state.interview,
                    format: action.payload
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

let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0')
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd

// initial state of component
const initialState = {
    job: {
        job_title: "",
        company: "",
        description: "",
        salary: 0,
        location: "",
        date_applied: "",
        closing_date: "",
        cv: "",
        cover_letter: "",
        active: "1",
        stage: "1"
    },
    interview : {
        interview_date: "",
        format: "select",
        interviewer: "",
        notes: ""
    },
    application_notes : {
        date: today,
        data: ""
    },
    step: 1
}

const JobForm = () => {
    const [state, dispatch] = useReducer(jobFormReducer, initialState)
    const dispatchAction = useDispatch()
    const user_id = useSelector(state => state.user_id)
    const job_id = useSelector(state => state.job_id)
    const access_token = useSelector(state => state.user.access_token)
    const {
        job: {
            job_title,
            company,
            description,
            salary,
            location,
            date_applied,
            closing_date,
            cv,
            cover_letter,
            active,
            stage
        },
        interview : {
            interview_date,
            format,
            interviewer,
            notes
        },
        application_notes : {
            date,
            data
        },
        step
    } = state

    // form fields for first step
    const firstFormValues = {
        job_title,
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
        data
    }

    // form fields for third step
    const thirdFormValues = {
        interview_date,
        format,
        interviewer,
        notes
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
    const handleJobChange = e => {
        dispatch({
            type: 'JOB_FIELD_CHANGE',
            payload: {
                fieldName: e.target.id,
                value: e.target.value
            }
        })
    }

    const handleAppChange = e => {
        dispatch({
            type: 'APPLICATION_FIELD_CHANGE',
            payload: {
                fieldName: e.target.id,
                value: e.target.value
            }
        })
    }

    const handleInterviewChange = e => {
        dispatch({
            type: 'INTERVIEW_FIELD_CHANGE',
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

    const handleFirstSubmit = e => {
        e.preventDefault()


        // assigns the job object in state to data variable
        const job_data = { ...state.job }


        // dispatches object with user id and job data
        // Jobs/actions.js Line 100
        dispatchAction(addJob({
            user_id,
            access_token,
            job_data: job_data,
        }))

    }

    const handleSecondSubmit = e => {
        e.preventDefault()

        console.log("second submit")

        // assigns the invterview and notes objects in state to data variables
        const interview_data = { ...state.interview }
        const notes_data = { ...state.application_notes }

        console.log(interview_data)
        console.log(notes_data)



        dispatchAction(addAppNote({
            user_id,
            job_id,
            access_token,
            notes_data: notes_data,
        }))


        dispatchAction(addInterview({
            user_id,
            job_id,
            access_token,
            interview_data: interview_data,
        }))


        dispatch({ type: 'RESET_FORM' })
    }
    return (
        <>
        <form onSubmit={handleFirstSubmit}>
            <JobDetailsForm
                currentStep={step === 1}
                nextStep={nextStep}
                handleFirstSubmit={handleFirstSubmit}
                handleJobChange={handleJobChange}
                values={firstFormValues}
            />
        </form>
        <form onSubmit={handleSecondSubmit}>
            <ApplicationDetailsForm
                currentStep={step === 2}
                nextStep={nextStep}
                prevStep={prevStep}
                handleJobChange={handleJobChange}
                handleAppChange={handleAppChange}
                values={secondFormValues}
            />
            <InterviewDetailsForm
                currentStep={step === 3}
                nextStep={nextStep}
                prevStep={prevStep}
                handleSecondSubmit={handleSecondSubmit}
                handleInterviewChange={handleInterviewChange}
                handleInterviewFormat={handleInterviewFormat}
                values={thirdFormValues}
            />
        </form>
        </>
    )
}

export default JobForm;