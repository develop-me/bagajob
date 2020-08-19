import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../data/actions/UserActions/loginUserActions';
import { resetAuthResponse } from '../../data/actions/UserActions/resetAuthResponse';
import email_icon from '../../assets/images/email_icon.svg';
import lock_icon from '../../assets/images/lock_icon.svg';

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
            <h1 className="brand_text">bagajob</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <span><img src={email_icon} alt="an @ symbol" /></span>
                    <input
                        value={email}
                        placeholder="Email address"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <span><img src={lock_icon} alt="a padlock symbol" /></span>
                    <input
                        value={password}
                        placeholder="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <small className="password_forgot">Forgot password?</small>
                </div>
                <button className="primarybtn">LOG IN</button>
            </form>
            <b>{authResponse !== null && authResponse}</b>
        </>
    );
};

export default Login;