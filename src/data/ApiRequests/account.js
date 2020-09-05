import axios from '../axios'

const token = localStorage.getItem('user')

// user patch request
export const updateAccount = data => {
    const { user_id, account_data } = data
    return axios.patch(`user/${user_id}`, account_data, {
        headers: {
            'Authorization': token
        }
    })
}

// user delete request
export const deleteAccount = data => {
    const { user_id } = data
    return axios.delete(`user/${user_id}`, null, {
        headers: {
            'Authorization': token
        }
    })
}