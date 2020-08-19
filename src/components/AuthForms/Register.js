import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../data/actions/UserActions/registerUserActions';
import { resetAuthResponse } from '../../data/actions/UserActions/resetAuthResponse';

const Login = ({ history }) => {
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
        console.log(state)
        dispatch(registerUser(state, history));
    }

    const authResponse = useSelector(state => state.authResponse)

    useEffect(() => {
        dispatch(resetAuthResponse());
    }, []);

    return (
        <>
            <h1 className="brand_text">bagajob</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        value={fullName}
                        placeholder="Full name"
                        type="text"
                        onChange={e => setFullName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={email}
                        placeholder="Email address"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={password}
                        placeholder="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="primarybtn">CREATE ACCOUNT</button>
            </form>
            <b>{authResponse !== null && authResponse}</b>
            <small>Already have an account? <Link to="/home/login">Login</Link></small>
        </>
    );
};

export default Login;