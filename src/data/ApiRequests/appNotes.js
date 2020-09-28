import axios from '../axios'

const token = localStorage.getItem('user')

// application note post request
// job_id is undefined because job never sent to api and job_id never returned
export const addAppNote = data => {
    console.log(data)
    const { user_id, job_id, access_token, notes_data } = data
    return axios.post(`user/${user_id}/jobs/${job_id}/app-notes`, null, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// application note patch request
export const updateAppNote = data => {
    const { user_id, job_id, note_id, note_data, access_token } = data
    return axios.patch(`user/${user_id}/jobs/${job_id}/app-notes/${note_id}`, note_data, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// application note delete request
export const deleteAppNote = data => {
    const { user_id, job_id, note_id, access_token } = data
    return axios.delete(`user/${user_id}/jobs/${job_id}/app-notes/${note_id}`, null, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}