import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { resetAuthResponse, login } from '../../data/Auth/actions'
import useFormValidation from '../../customHooks/useFormValidation'
import email_icon from '../../assets/images/email_icon.svg'
import lock_icon from '../../assets/images/lock_icon.svg'
import Nav from '../Nav'

import background from "../../assets/images/backgroundIcons.svg";

const initialState = {
    email: "",
    password: ""
}

const Login = ({ history }) => {
    const { authResponse } = useSelector(state => state)
    const dispatch = useDispatch()
    // destructuring the properties returned from the custom hook
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialState, login, history)

    // resets authResponse global state property every time component renders
    useEffect(() => {
        dispatch(resetAuthResponse())
    }, [])

    return (
        <div className="login-background" style={{ backgroundSize: 'fill', backgroundImage: `url(${background})` }}>
            {/* <Nav /> */}
            <Link to="/home/">
                <h1 className="brand-title center">Bagajob<span className="highlight-text">.</span></h1>
            </Link>
            <div className="form-container-small login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form-input-container">
                        <span>
                            <img
                                className="email-icon"
                                src={email_icon}
                                alt="An icon representing an email"
                            />
                        </span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <p>{errors.email}</p>}
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
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <p>{errors.password}</p>}
                    <Link
                        to="/forgot-password"
                        className="login-prompt password-forgot"
                    >Forgot password?
                    </Link>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="primarybtn login-btn"
                        >LOG IN
                        </button>
                    </div>
                    <Link
                        to="/home/signup"
                    >
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="secondarybtn signup-btn"
                        >
                            SIGN UP
                        </button>
                    </Link>
                    <p className="para-highlight center">{authResponse !== null && authResponse}</p>
                </form>
            </div>
        </div>
    )
}

export default Login