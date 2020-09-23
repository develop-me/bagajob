import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { passwordReset } from '../../data/Auth/actions'
import { useQueryParam, StringParam } from 'use-query-params'
import Nav from '../Nav'

const PasswordReset = (props) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [lengthWarning, setLengthWarning] = useState(null)
    const [matchWarning, setMatchWarning] = useState(null)
    const dispatch = useDispatch()

    // get the email and reset token from the incoming url
    const [email, setEmail] = useQueryParam('email', StringParam)
    const [token, setToken] = useQueryParam('token', StringParam)

    const handleSubmit = e => {
        e.preventDefault()

        if (password.length < 6) {
            setLengthWarning("Password must be at least 6 characters.")
        } else if (password !== confirmPassword) {
            setMatchWarning("Passwords must match.")
        } else {
            const data = {
                email,
                password,
                token
            }
            dispatch(passwordReset(data))
        }
    }

    return (
        <> <Nav />
        <form onSubmit={handleSubmit}>
            <h1>Password Reset</h1>
            <h3>Please enter your new password (at least 6 characters).</h3>
            <input
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value) }}
            />
            {lengthWarning !== null && lengthWarning}
            <h3>Please confirm your new password.</h3>
            <input
                type="password"
                value={confirmPassword}
                onChange={e => { setConfirmPassword(e.target.value) }}
            />
            {matchWarning !== null && matchWarning}
            <button type="submit">Submit</button>
        </form> </>
    )
}

export default PasswordReset