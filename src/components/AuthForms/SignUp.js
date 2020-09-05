import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { resetAuthResponse, signUp } from '../../data/Auth/actions'

const SignUp = ({ history }) => {
    const [name, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { authResponse } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleSignUp = e => {
        e.preventDefault()

        const data = {
            name,
            email,
            password
        }

        dispatch(signUp(data, history))
    }

    // resets authResponse global state property every time component renders
    useEffect(() => {
        dispatch(resetAuthResponse())
    }, [])

    return (
        <>
            <h1 className="brand-text">bagajob</h1>
            <div className="form-container-small signup-container">
                <form className="signup-form" onSubmit={handleSignUp}>
                    <div className="signup-form-input-container">
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Full name"
                            value={name}
                            onChange={e => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="signup-form-input-container">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="signup-form-input-container">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="primarybtn createacc-btn" type="submit">
                        CREATE ACCOUNT
                    </button>
                    <p className="login-prompt">
                        Already have an account? <Link to="/home/login">Log in</Link>
                    </p>
                    <b>{authResponse !== null && authResponse}</b>
                </form>
            </div>
        </>
    )
}

export default SignUp