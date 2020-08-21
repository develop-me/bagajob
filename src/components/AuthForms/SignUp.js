import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { resetAuthResponse, registerUser } from '../../data/actions/AuthActions';

const SignUp = ({ history }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const state = {
            fullName: fullName,
            email: email,
            password: password,
        }

        dispatch(registerUser(state, history));
    }

    // brings in authResponse global state property
    const authResponse = useSelector(state => state.authResponse)

    // resets authResponse every time component renders
    useEffect(() => {
        dispatch(resetAuthResponse());
    }, []);

    return (
        <>
            <h1 className="brand-text">bagajob</h1>
            <div className="signup-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="signup-form-input-container">
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Full name"
                            onChange={e => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="signup-form-input-container">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="signup-form-input-container">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="primarybtn" type="submit" id="createacc-btn">
                        CREATE ACCOUNT
                    </button>
                    <p className="login-prompt">Already have an account? <Link to="/home/login">Log in</Link></p>
                    <b>{authResponse !== null && authResponse}</b>
                </form>

            </div>
        </>
    );
};

export default SignUp;