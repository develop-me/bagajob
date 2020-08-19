import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../data/actions/UserActions/loginUserActions';
import { resetAuthResponse } from '../../data/actions/UserActions/resetAuthResponse';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const state = {
            email: email,
            password: password,
        }
        console.log(state)
        dispatch(loginUser(state, history));
    }

    const authResponse = useSelector(state => state.authResponse)

    useEffect(() => {
        dispatch(resetAuthResponse());
    }, []);

    return (
        <>
            <h1>bagajob</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>@</span>
                    <input
                        value={email}
                        placeholder="Email address"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <span>lock icon</span>
                    <input
                        value={password}
                        placeholder="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <small>Forgot password?</small>
                </div>
                <button>LOG IN</button>
            </form>
            <b>{authResponse !== null && authResponse}</b>
        </>
    );
};

export default Login;