import axios from '../axios'

export const signUp = data => {
    return axios.post("register", data)
}

export const login = data => {
    const login_data = {
        username: data.email,
        password: data.password
    }
    return axios.post("user/login", login_data)
}