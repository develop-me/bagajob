import axios from '../axios'

const token = localStorage.getItem('user')

// interview post request
export const addInterview = data => {
    const { user_id, job_id } = data
    return axios.post(`user/${user_id}/job/${job_id}/interviews`, null, {
        headers: {
            'Authorization': token
        }
    })
}

// interview patch request
export const updateInterview = data => {
    const { user_id, job_id, interview_data } = data
    // only destructure the id as we want to preserve the interview_data object to send through to the db
    const { id: interview_id } = interview_data
    return axios.patch(`user/${user_id}/job/${job_id}/interviews/${interview_id}`, interview_data, {
        headers: {
            'Authorization': token
        }
    })
}

// interview delete request
export const deleteInterview = data => {
    const { user_id, job_id, interview_id } = data
    return axios.delete(`user/${user_id}/job/${job_id}/interviews/${interview_id}`, null, {
        headers: {
            'Authorization': token
        }
    })
}