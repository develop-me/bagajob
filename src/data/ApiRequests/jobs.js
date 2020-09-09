import axios from '../axios'

const token = localStorage.getItem('user')

// jobs get request
export const getJobs = data => {
    const user_id = data
    return axios.get(`user/${user_id}/jobs`, null, {
        headers: {
            'Authorization': token
        }
    })
}

// single job get request
export const getJob = data => {
    const { user_id, job_id } = data
    return axios.get(`user/${user_id}/jobs/${job_id}`, null, {
        headers: {
            'Authorization': token
        }
    })
}

// single job post request
export const addJob = data => {
    const { user_id, job_data } = data
    return axios.post(`user/${user_id}/jobs`, job_data, {
        headers: {
            'Authorization': token
        }
    })
}

// single job patch request
export const updateJob = data => {
    const { user_id, job_id, job_data } = data
    return axios.patch(`user/${user_id}jobs/${job_id}`, job_data, {
        headers: {
            'Authorization': token
        }
    })
}

// single job delete request
export const deleteJob = data => {
    const { user_id, job_id } = data
    return axios.delete(`user/${user_id}jobs/${job_id}`, null, {
        headers: {
            'Authorization': token
        }
    })
}