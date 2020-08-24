import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetAuthResponse, loginUser } from '../../data/actions/AuthActions';
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

        dispatch(loginUser(state, history));
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
            <div className="form-container-small login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form-input-container">
                        <span><img className="email-icon" src={email_icon} alt="email-icon" /></span>
                        <input
                            value={email}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login-form-input-container">
                        <span><img className="password-icon" src={lock_icon} alt="password-icon" /></span>
                        <input
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
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
    );
};

export default Login;