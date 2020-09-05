import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetAuthResponse, login } from '../../data/Auth/actions'
import email_icon from '../../assets/images/email_icon.svg'
import lock_icon from '../../assets/images/lock_icon.svg'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { authResponse } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleLogin = e => {
        e.preventDefault()

        const data = {
            email,
            password
        }

        dispatch(login(data, history))
    }

    // resets authResponse global state property every time component renders
    useEffect(() => {
        dispatch(resetAuthResponse())
    }, [])

    return (
        <>
            <h1 className="brand-text">bagajob</h1>
            <div className="form-container-small login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="login-form-input-container">
                        <span>
                            <img
                                className="email-icon"
                                src={email_icon}
                                alt="An icon representing an email"
                            />
                        </span>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login-form-input-container">
                        <span>
                            <img
                                className="password-icon"
                                src={lock_icon}
                                alt="An icon representing a password"
                            />
                        </span>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <p className="login-prompt password-forgot">Forgot password?</p>
                    <button className="primarybtn login-btn" type="submit" id="">
                        LOG IN
                    </button>
                    <button className="secondarybtn signup-btn" type="submit" id="">
                        SIGN UP
                    </button>
                    <b>{authResponse !== null && authResponse}</b>
                </form>
            </div>
        </>
    )
}

export default Login