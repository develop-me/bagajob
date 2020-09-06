import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetAuthResponse, login, forgotPasswordInit } from '../../data/Auth/actions'
import useFormValidation from "../../customHooks/useFormValidation"
import email_icon from '../../assets/images/email_icon.svg'
import lock_icon from '../../assets/images/lock_icon.svg'

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

    const handleForgotPassword = () => {
        dispatch(forgotPasswordInit())
    }

    return (
        <>
            <h1 className="brand-text">bagajob</h1>
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
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <p className="error-text">{errors.email}</p>}
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
                    {errors.password && <p className="error-text">{errors.password}</p>}
                    <button
                        className="login-prompt password-forgot"
                        onClick={handleForgotPassword}
                    >Forgot password?
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="primarybtn login-btn"
                    >LOG IN
                    </button>
                    <button className="secondarybtn signup-btn" type="submit">
                        SIGN UP
                    </button>
                    <b>{authResponse !== null && authResponse}</b>
                </form>
            </div>
        </>
    )
}

export default Login