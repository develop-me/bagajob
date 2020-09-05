import {
    getJobs as apiGetJobs,
    addJob as apiAddJob,
    getJob as apiGetJob,
    updateJob as apiUpdateJob,
    deleteJob as apiDeleteJob
} from '../ApiRequests/jobs'

import {
    JOBS_GET_REQUEST,
    JOBS_GET_SUCCESS,
    JOBS_GET_FAILURE,
    SINGLE_JOB_GET_REQUEST,
    SINGLE_JOB_GET_SUCCESS,
    SINGLE_JOB_GET_FAILURE,
    SINGLE_JOB_PATCH_REQUEST,
    SINGLE_JOB_PATCH_SUCCESS,
    SINGLE_JOB_PATCH_FAILURE,
    SINGLE_JOB_POST_REQUEST,
    SINGLE_JOB_POST_SUCCESS,
    SINGLE_JOB_POST_FAILURE,
    SINGLE_JOB_DELETE_REQUEST,
    SINGLE_JOB_DELETE_SUCCESS,
    SINGLE_JOB_DELETE_FAILURE
} from './constants'

// gets all jobs from user's jobs table (only the properties needed for job preview component)
export const getJobs = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(getJobsRequest())
        apiGetJobs(data)
            .then(successResponse => {
                dispatch(getJobsSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(getJobsFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const getJobsRequest = () => dispatch => (
    dispatch({
        type: JOBS_GET_REQUEST,
    })
)

const getJobsSuccess = data => dispatch => (
    dispatch({
        type: JOBS_GET_SUCCESS,
        payload: data,
    })
)

const getJobsFailure = error => dispatch => (
    dispatch({
        type: JOBS_GET_FAILURE,
        payload: error
    })
)

// gets single job from user's jobs table
export const getSingleJob = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(getJobRequest())
        apiGetJob(data)
            .then(successResponse => {
                dispatch(getJobSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(getJobFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const getJobRequest = () => dispatch => (
    dispatch({
        type: SINGLE_JOB_GET_REQUEST
    })
)

const getJobSuccess = data => dispatch => (
    dispatch({
        type: SINGLE_JOB_GET_SUCCESS,
        payload: data
    })
)

const getJobFailure = data => dispatch => (
    dispatch({
        type: SINGLE_JOB_GET_FAILURE,
        payload: data
    })
)

// adds new job to user's jobs table
export const addJob = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(addJobRequest())
        apiAddJob(data)
            .then(successResponse => {
                dispatch(addJobSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(addJobFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const addJobRequest = () => dispatch => (
    dispatch({
        type: SINGLE_JOB_POST_REQUEST,
    })
)

const addJobSuccess = data => dispatch => (
    dispatch({
        type: SINGLE_JOB_POST_SUCCESS,
        payload: data
    })
)

const addJobFailure = error => dispatch => (
    dispatch({
        type: SINGLE_JOB_POST_FAILURE,
        payload: error
    })
)

// updates details for a single job in user's jobs table
export const updateJob = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(updateJobRequest())
        apiUpdateJob(data)
            .then(successResponse => {
                dispatch(updateJobSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(updateJobFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const updateJobRequest = () => dispatch => (
    dispatch({
        type: SINGLE_JOB_PATCH_REQUEST
    })
)

const updateJobSuccess = data => dispatch => (
    dispatch({
        type: SINGLE_JOB_PATCH_SUCCESS,
        payload: data
    })
)

const updateJobFailure = error => dispatch => (
    dispatch({
        type: SINGLE_JOB_PATCH_FAILURE,
        payload: error
    })
)

// deletes a single job in user's jobs table
export const deleteJob = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(deleteJobRequest())
        apiDeleteJob(data)
            .then(successResponse => {
                dispatch(deleteJobSuccess(data.job_id))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(deleteJobFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const deleteJobRequest = () => dispatch => (
    dispatch({
        type: SINGLE_JOB_DELETE_REQUEST
    })
)

const deleteJobSuccess = data => dispatch => (
    dispatch({
        type: SINGLE_JOB_DELETE_SUCCESS,
        payload: data
    })
)

const deleteJobFailure = error => dispatch => (
    dispatch({
        type: SINGLE_JOB_DELETE_FAILURE,
        payload: error
    })
)