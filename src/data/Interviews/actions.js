import axios from '../axios'

import {
    INTERVIEW_POST_REQUEST,
    INTERVIEW_PUT_REQUEST,
    INTERVIEW_DELETE_REQUEST,
} from './constants'

// adds new interview for specific job
export const addNewInterview = () => dispatch => {
    axios.post(`user/job/interview`, null, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerAddNewInterview(data.data))
    });
}

const reducerAddNewInterview = data => {
    return {
        type: INTERVIEW_POST_REQUEST,
        payload: data
    };
};

// updates a specific job interview's details
export const updateInterview = data => dispatch => {
    const { userId, jobId, interviewData } = data
    // only destructure the id as we want to preserve the interviewData object to send through to the db
    const { interviewId } = interviewData
    // make sure keys are the same as in the database, can just pass in the interviewData object. create the object when dispatching the action and simply pass it through.
    axios.patch(`user/${userId}/job/${jobId}/interview/${interviewId}`, interviewData, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerUpdateInterview(data.data))
    });
}

// need to verify that the user owns the job and the job owns the interview, but this can be dealt with as the bearer token is verified on the backend to prove it's the user making the request

const reducerUpdateInterview = data => {
    return {
        type: INTERVIEW_PUT_REQUEST,
        payload: data
    };
};

// deletes a single interview from a specific job's interview card
export const deleteInterview = id => dispatch => {
    axios.patch(`user/job/interview/${id}`, null, {
        headers: {
            'Authorization': token
        }
    }).then(() => {
        dispatch(reducerDeleteInterview(id))
    });
}

const reducerDeleteInterview = id => {
    return {
        type: INTERVIEW_DELETE_REQUEST,
        payload: id
    };
};