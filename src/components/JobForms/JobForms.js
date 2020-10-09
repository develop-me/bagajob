import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJob, updateJob } from '../../data/Jobs/actions'
import { addAppNote } from '../../data/AppNotes/actions'
import { addInterview } from '../../data/Interviews/actions'
import dateToday from '../../helpers/dateToday.js'
import JobDetailsForm from './JobDetailsForm'
import ApplicationDetailsForm from './ApplicationDetailsForm'
import InterviewDetailsForm from './InterviewDetailsForm'

// local reducer that handles updating local state properties (initialised in the initialState variable below)
const jobFormReducer = (state, action) => {
    switch (action.type) {
        // for values within the job object
        case 'JOB_FIELD_CHANGE':
            return {
                ...state,
                job: {
                    ...state.job,
                    [action.payload.fieldName]: action.payload.value
                }
            }
        // for values within the interview object
        case 'INTERVIEW_FIELD_CHANGE':
            return {
                ...state,
                interview : {
                    ...state.interview,
                    [action.payload.fieldName]: action.payload.value
                }
            }
        // specifically for the interview.format value    
        case 'INTERVIEW_FORMAT_CHANGE':
            return {
                ...state,
                interview : {
                    ...state.interview,
                    format: action.payload
                }
            }
        // for values within the application_notes object
        case 'APPLICATION_FIELD_CHANGE':
            return {
                ...state,
                application_notes : {
                    ...state.application_notes,
                    [action.payload.fieldName]: action.payload.value
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

// calculate today's date for application_notes
let today = dateToday()

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
        cv: "",
        cover_letter: "",
        active: "1",
        stage: "1"
    },
    interview : {
        interview_date: today,
        format: "in_person",
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
            title,
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
            type: 'INTERVIEW_FORMAT_CHANGE',
            payload: e.target.value
        })
    }

    // Form must submit twice: the job_id is returned after the first submission (POST user/${user_id}/jobs) and is required in the URL of the second submission (POST user/${user_id}/jobs/${job_id}/interviews & POST user/${user_id}/jobs/${job_id}/app-notes)
    const handleFirstSubmit = e => {
        e.preventDefault()


        // assigns the job object in state to data variable
        const job_data = { ...state.job }


        // dispatches job_data to API (POST user/${user_id}/jobs)
        // job_id is returned and stored in global state
        dispatchAction(addJob({
            user_id,
            access_token,
            job_data: job_data,
        }))

    }

    // Second submission now that job_id has been returned from API
    const handleSecondSubmit = e => {
        e.preventDefault()

        // assigns the invterview and notes objects in state to data variables
        const interview_data = { ...state.interview }
        const notes_data = { ...state.application_notes }
        const job_data = { ...state.job }

        // dispatches notes_data to API (POST user/${user_id}/jobs/${job_id}/app-notes)
        dispatchAction(addAppNote({
            user_id,
            job_id,
            access_token,
            notes_data: notes_data,
        }))

        console.log(interview_data)

        // dispatches interview_data to API (POST user/${user_id}/jobs/${job_id}/interviews)
        dispatchAction(addInterview({
            user_id,
            job_id,
            access_token,
            interview_data: interview_data,
        }))

        // dispatches job_data to API (PATCH user/${user_id}/jobs/${job_id})
        dispatchAction(updateJob({
            user_id,
            job_id,
            access_token,
            job_data: { title, company, active, stage, cv, cover_letter }
        }))

        // resets form fields
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