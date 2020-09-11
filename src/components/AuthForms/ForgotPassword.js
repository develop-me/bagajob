import React from 'react'
import { forgotPasswordInit } from '../../data/Auth/actions'
import useFormValidation from '../../customHooks/useFormValidation'

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
            </form>
        </div>
    )
}

export default ForgotPassword