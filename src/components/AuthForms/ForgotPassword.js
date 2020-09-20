import React, { useEffect } from 'react'
import { forgotPasswordInit, resetAuthResponse } from '../../data/Auth/actions'
import useFormValidation from '../../customHooks/useFormValidation'
import { useSelector, useDispatch } from 'react-redux'

const initialState = {
    email: ""
}

const ForgotPassword = () => {
    // destructuring the properties returned from the custom hook
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialState, forgotPasswordInit)

    const dispatch = useDispatch()
    // resets authResponse global state property every time component renders
    useEffect(() => {
        dispatch(resetAuthResponse())
    }, [])
    
    const { authResponse } = useSelector(state => state)
    const { loaded } = useSelector(state => state)

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <form onSubmit={handleSubmit}>
                <h2>Please enter your email, you will then be emailed a link to reset your password.</h2>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <button
                    type="submit"
                    disabled={isSubmitting}
                >Submit
                </button>
                {authResponse !== null && loaded !== false ? <p>{authResponse}</p> : null}
            </form>
        </div>
    )
}

export default ForgotPassword