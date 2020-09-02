import axios from '../axios'

import {
    SINGLE_JOB_GET_REQUEST,
    SINGLE_JOB_GET_SUCCESS,
    SINGLE_JOB_PUT_REQUEST,
    SINGLE_JOB_POST_REQUEST,
    SINGLE_JOB_POST_SUCCESS
} from './constants'

// store bearer token in redux state, fetch it using useSelector(), look into jwt refresh tokens
export const addNewJob = data => dispatch => {
    const { user_id, job_data } = data
    const token = localStorage.getItem('user')
    axios.post(`user/${user_id}/jobs`, job_data, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(saveNewJob(data.data))
    });
}

const saveNewJob = data => {
    return {
        type: SINGLE_JOB_POST_SUCCESS,
        payload: data,
    };
};

// get single job from db
export const getSingleJob = job_id => dispatch => {
    const token = localStorage.getItem('user')
    axios.get(`user/jobs/${job_id}`, null, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(saveJob(data.data))
    });
}

export const saveJob = data => {
    return {
        type: SINGLE_JOB_GET_SUCCESS,
        payload: data,
    };
};

// updates the details for a specific job's details card
export const updateJobDetails = job => dispatch => {
    const { id } = job
    const token = localStorage.getItem('user')
    axios.put(`user/job/${id}`, {
        title: job.jobTitle,
        company: job.company,
        description: job.jobDescription,
        salary: job.salary,
        location: job.location,
        date_applied: job.dateApplied,
        closing_date: job.closingDate,
        recruiter_name: job.recruiterName,
        recruiter_email: job.recruiterEmail,
        recruiter_phone: job.recruiterPhone,
        cover_letter: job.coverLetter,
        cv: job.cv
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerJobDetails(data.data))
    });
}

const reducerJobDetails = data => {
    return {
        type: SINGLE_JOB_PUT_REQUEST,
        payload: data,
    };
};