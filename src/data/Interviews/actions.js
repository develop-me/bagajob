import {
    addInterview as apiAddInterview,
    updateInterview as apiUpdateInterview,
    deleteInterview as apiDeleteInterview
} from '../ApiRequests/interviews'

import {
    INTERVIEW_POST_REQUEST,
    INTERVIEW_POST_SUCCESS,
    INTERVIEW_POST_FAILURE,
    INTERVIEW_PATCH_REQUEST,
    INTERVIEW_PATCH_SUCCESS,
    INTERVIEW_PATCH_FAILURE,
    INTERVIEW_DELETE_REQUEST,
    INTERVIEW_DELETE_SUCCESS,
    INTERVIEW_DELETE_FAILURE,
} from './constants'

// adds new empty interview for specific job
export const addInterview = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(addInterviewRequest())
        apiAddInterview(data)
            .then(successResponse => {
                dispatch(addInterviewSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(addInterviewFailure(errorResponse))
            })
    })
}

const addInterviewRequest = () => dispatch => (
    dispatch({
        type: INTERVIEW_POST_REQUEST,
    })
)

const addInterviewSuccess = data => dispatch => (
    dispatch({
        type: INTERVIEW_POST_SUCCESS,
        payload: data
    })
)

const addInterviewFailure = error => dispatch => (
    dispatch({
        type: INTERVIEW_POST_FAILURE,
        payload: error
    })
)

// updates a specific job interview's details
export const updateInterview = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(updateInterviewRequest())
        apiUpdateInterview(data)
            .then(successResponse => {
                dispatch(updateInterviewSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(updateInterviewFailure(errorResponse))
            })
    })
}

const updateInterviewRequest = () => dispatch => (
    dispatch({
        type: INTERVIEW_PATCH_REQUEST,
    })
)

const updateInterviewSuccess = data => dispatch => {
    return (
        dispatch({
            type: INTERVIEW_PATCH_SUCCESS,
            payload: data.data.data
        })
    )
} 

const updateInterviewFailure = error => dispatch => (
    dispatch({
        type: INTERVIEW_PATCH_FAILURE,
        payload: error
    })
)

// deletes a single interview from a specific job's interview card
export const deleteInterview = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(deleteInterviewRequest())
        apiDeleteInterview(data)
            .then(successResponse => {
                dispatch(deleteInterviewSuccess(data.interview_id))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(deleteInterviewFailure(errorResponse))
            })
    })
}

const deleteInterviewRequest = () => dispatch => (
    dispatch({
        type: INTERVIEW_DELETE_REQUEST,
    })
)

const deleteInterviewSuccess = data => dispatch => (
    dispatch({
        type: INTERVIEW_DELETE_SUCCESS,
        payload: data
    })
)

const deleteInterviewFailure = error => dispatch => (
    dispatch({
        type: INTERVIEW_DELETE_FAILURE,
        payload: error
    })
)