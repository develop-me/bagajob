import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>HOME</div>
            <Link to="/home/login">LOGIN</Link>
            <Link to="/home/register">SIGN UP</Link>
        </>
    );
};

export default Home;