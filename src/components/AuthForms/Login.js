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
            <h1 className="brand_text">bagajob</h1>
            <div className="login_container">
                <form className="login_form" onSubmit={handleSubmit}>
                    <div className="login_form_input_container">
                        <span><img className="email_icon" src={email_icon} alt="email-icon" /></span>
                        <input
                            value={email}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login_form_input_container">
                        <span><img className="password_icon" src={lock_icon} alt="password-icon" /></span>
                        <input
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <p className="password_forgot">Forgot password?</p>
                    <button className="primarybtn" type="submit" id="login_btn">
                        LOG IN
                    </button>
                    <button className="secondarybtn" type="submit" id="signup_btn">
                        SIGN UP
                    </button>
                    <b>{authResponse !== null && authResponse}</b>
                </form>
            </div>
        </>
    );
};

export default Login;