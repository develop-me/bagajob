import axios from '../axios'

// sign up user post request
export const signUp = data => {
    const { access_token } = data
    return axios.post('register', data, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// login user post request
export const login = data => {
    const login_data = {
        username: data.email,
        password: data.password
    }
    return axios.post('login', login_data)
}

// initial forgot password post request, responds with an email to the user
export const forgotPasswordInit = data => {
    return axios.post('reset-password-without-token', data)
}

// password reset request with password reset token
export const passwordReset = data => {
    return axios.post('reset-password-with-token', data)
}